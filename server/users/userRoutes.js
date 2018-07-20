const router = require('express').Router();
const success = 200;
const created = 201;
const deleted = 204;
const serverError = 500;
const notFound = 404;

User = require('./User')

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

router.post('/login', (req, res) => {
    user = req.body
    User
    .findOne()
    .then((user) => {
        res.status(success).json(user)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

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