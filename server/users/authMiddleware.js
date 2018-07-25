const jwt = require('jsonwebtoken');
const secret = 'Carrier has Arrived';

const makeToken = (user) => {
    payload = {
        sub: user._id,
        name: user.username
    }
    return jwt.sign(payload, secret)
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === undefined) {
        res.sendStatus(401);
        return
    }
    jwt.verify(token, secret, (err, payload) => {
        if(err){
            res.status(401).json({message: 'invalid token'})
        }
        req.jwtpayload = payload
        next()
    })
}

module.exports = {
    makeToken,
    verifyToken

}