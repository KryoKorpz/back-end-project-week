const express = require('express');
const mongoose = require('mongoose');

const Note = require('./server/Note')
const options = require('./options')
// --- Variables ---
const port = process.env.PORT || 5000;
const success = 200;
const created = 201;
const deleted = 204;
const serverError = 500;
const notFound = 404;

const server = express();
server.use(express.json());
console.log(options)

mongoose.connect('mongodb://ds129183.mlab.com:29183/lambdanotes', options)
    .then(() => {
        console.log('connected to Mlab')
        server.listen(port, () => {
            console.log(`You did it on ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

server.get('/', (req, res) =>{
    res.status(200).json('Hi World, Im here')
})

server.post('/notes', (req, res) => {
    const newNote = new Note(req.body)
    .save()
    .then((newNote) => {
        res.status(created).json(newNote)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})

server.get('/notes', (req, res) => {
    Note
    .find()
    .then((notes) => {
        res.status(success).json(notes)
    })
    .catch((error) => {
        res.status(serverError).json(error)
    })
})