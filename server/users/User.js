const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 11;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
})

.pre('save', function(next){
    bcrypt.hash(this.password, saltRounds, (err, hashWord) => {
        if(hashWord) {
            this.password = hashWord
            next()
        } else {
            console.log('error', err)
            next()
        }
    })
})

userSchema.methods.validatePassword = function(passwordGuess) {
    return bcrypt.compare(passwordGuess, this.password);
  };

module.exports = mongoose.model('User', userSchema, 'users')