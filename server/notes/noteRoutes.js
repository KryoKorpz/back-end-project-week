const router = require('express').Router();
const ObjectId = require('mongodb').ObjectID
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

router.get('/:id', (req, res) => {
    const id = req.params.id
    Note
    .findById(ObjectId(id))
    .then((note) => {
        res.status(success).json(note)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    Note
    .findByIdAndDelete(ObjectId(id))
    .then(() => {
        res.status(deleted).json()
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

router.put('/update/:id', (req, res) => {
    const id = req.params.id
    const noteUpdate = req.body
    Note
    .findByIdAndUpdate(ObjectId(id), noteUpdate, {new:true})
    .then((noteUpdate) => {
        res.status(success).json(noteUpdate)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})
/* 
user notes by registered user
*/

module.exports = router;