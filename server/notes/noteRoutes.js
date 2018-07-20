const router = require('express').Router();
const success = 200;
const created = 201;
const deleted = 204;
const serverError = 500;
const notFound = 404;

Note = require('./Note')

router.post('/', (req, res) => {
    const newNote = new Note(req.body)
    .save()
    .then((newNote) => {
        res.status(created).json(newNote)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

router.get('/', (req, res) => {
    Note
    .find()
    .then((notes) => {
        res.status(success).json(notes)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})
/* 
single note route by id
user notes by registered user
*/

module.exports = router;