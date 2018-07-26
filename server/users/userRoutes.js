const router = require('express').Router();
const bcrypt = require('bcrypt')
const ObjectId = require('mongodb').ObjectID


const success = 200;
const created = 201;
const deleted = 204;
const serverError = 500;
const notFound = 404;

User = require('./User')
const {makeToken, verifyToken} = require('./authMiddleware')

router.post('/register', (req, res) => {
    const newUser = new User(req.body)
    .save()
    .then((newUser) => {
        res.status(created).json(newUser)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

router.put('/login', (req,res) => {
    const { username, password } = req.body
    User.findOne({username}) 
    .then((user) => {
      user.validatePassword(password)
        .then((isMatch) => {
          if(isMatch) {
            const token = makeToken(user)
            console.log(user)
            console.log(token)
            res.status(200).json({user, token})
          } else {
            res.sendStatus(401)
          }
        })
        .catch((error) => {
          res.status(500).json({message: 'unauthorized'})
        })
    })
    .catch((error) => {
      res.status(500).json(error)
    })
  })


// router.post('/login',  (req, res) => {
//     user = req.body.username
//     password = req.body.password
//     User
//     .findOne()
//     .then((user) => {
//         res.status(success).json(user)
//     })
//     .catch((error) => {
//         res.status(serverError).json(error)
//     })
// })

// router.post('/login', (req, res, next) => {
//     if (!req.username) {
//       return res.status(403).json({
//         error: 'no username check your comparePW middleware'
//       });
//     } else {
//         return res.status(success).json({msg:Success})
//     }
// });

// router.post('/login', (req, res, next) => {
//     const { username, password} = req.body;
//     if(!username) {
//         res.json({ error: 'must supply user name' })
//         return;
//     }
//     User
//         .findOne({ username }, (err, user) => {
//             if (err || user === null) {
//                 res.json({ error: 'user not found' })
//                 return;
//             }
//             const pwHash = user.password
//             bcrypt
//                 .compare(password, pwHash)
//                 .then((response) => {
//                     if (!response) throw new Error ();
//                     req.username = user.username
//                     next();
//                 })
//                 .catch((err) => {
//                     res.json({ error: 'password and username incorrect' })
//                 })
//     });
// })
router.get('/:id', verifyToken, (req, res) => {
    const id = req.params.id
    User
    .findById(ObjectId(id))
    .select('-password')
    .then((user) => {
        res.status(success).json(user)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

module.exports = router