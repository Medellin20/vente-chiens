const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const auth = async function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        
        const user = await User.findById(decoded.user.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        req.user = user;
        // console.log(req.user.id);

        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid', error: err.message });
    }
};

module.exports = auth;

    
