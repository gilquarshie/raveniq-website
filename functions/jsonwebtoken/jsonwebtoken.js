import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || "ravenIqLabs@124";

export const generateToken = (user, rememberMe) => {
    return jwt.sign(user, secretKey, { expiresIn: rememberMe ? '7d' : '1d' });
}

export const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
}