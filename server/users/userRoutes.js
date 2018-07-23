const router = require('express').Router();
const success = 200;
const created = 201;
const deleted = 204;
const serverError = 500;
const notFound = 404;

User = require('./User')
const compareUserPW = require('./comparePW');

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

router.post('/login', compareUserPW, (req, res) => {
    if (!req.username) {
      return res.status(403).json({
        error: 'no username check your comparePW middleware'
      });
    } else {
        return res.status(success).json({msg:Success})
    }
});

router.get('/', (req, res) => {
    User
    .find()
    .then((users) => {
        res.status(success).json(users)
    })
    .catch((error) => {
        res.status(serverError).json(users)
    })
})

module.exports = router