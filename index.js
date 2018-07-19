const express = require('express');
const port = process.env.PORT || 5000

const server = express();
server.use(express.json());


server.get('/', (req, res) =>{
    res.status(200).json('HI World, Im here')
})

server.listen(port, () => {
    console.log(`You did it on ${port}`)
})