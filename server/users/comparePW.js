const bcrypt = require('bcrypt');

const User = require('./User');

const compareUserPW = (req, res, next) => {
    const { username, password} = req.body;
    if(!username) {
        res.json({ error: 'must supply user name' })
    }
    User
        .findOne({ username }, (err, user) => {
            if (err || user === null) {
                res.json({ error: 'user not found' })
                return;
            }
            const pwHash = user.password
            bcrypt
                .compare(password, pwHash)
                .then((response) => {
                    if (!response) throw new Error ();
                    req.username = user.username
                    next();
                })
                .catch((err) => {
                    res.json({ error: 'password and username incorrect' })
                })
    });
};

module.exports = {
    compareUserPW
};