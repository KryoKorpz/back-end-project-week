const express = require('express');
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');

const server = express();
server.use(express.json());

mongoose.connect('mongodb://ds129183.mlab.com:29183/lambdanotes',{user:'admin', pass:'admin1!@#', useNewUrlParser: true })
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

