import jwt from 'jsonwebtoken';
import { config } from '../config.js';
export const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }
    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};
// Keep backward compatibility
export const authenticateToken = authenticate;
;
//# sourceMappingURL=auth.middleware.js.map