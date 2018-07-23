const mongoose = require('mongoose');
const express = require('express')

const setupRoutes = require('./server/server');
const setupMiddleware = require('./server/middleware');

const port = process.env.PORT || 5000;

const server = express();
setupMiddleware(server);
setupRoutes(server);

// mongoose.connect('mongodb://ds129183.mlab.com:29183/lambdanotes', {user:'admin', pass:'admin1!@#', useNewUrlParser: true })
mongoose.connect(`mongodb://localhost:27017/backend`, { useNewUrlParser: true } )
    .then(() => {
        console.log('connected to Mlab')
        server.listen(port, () => {
            console.log(`You did it on ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })