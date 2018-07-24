const noteRoutes = require('./notes/noteRoutes');
const userRoutes = require('./users/userRoutes');

const compareUserPW = require('./users/comparePW')

module.exports = function(server) {
    server.get('/', (req, res) =>{
        res.status(200).json('Hi World, Im here')
    })
    server.use('/notes', noteRoutes);
    server.use('/users', userRoutes);
    };