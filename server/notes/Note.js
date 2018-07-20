const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Note', noteSchema, 'notes')