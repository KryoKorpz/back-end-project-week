const noteRoutes = require('./noteRoutes');

module.exports = function(server) {
    server.get('/', (req, res) =>{
        res.status(200).json('Hi World, Im here')
    })
    server.use('/notes', noteRoutes);
    };