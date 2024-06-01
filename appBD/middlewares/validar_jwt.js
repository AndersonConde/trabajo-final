const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJwt = async (req, res = response, next) => {
    let token = req.header('authorization');

    if (!token) {
        return res.status(401).json({ message: 'Error de token' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.AUTH_JWT_SECRET_KEY);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token Inválido' });
    }
};

module.exports = {
    validateJwt
};

