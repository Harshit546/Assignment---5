import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.headers.authorization?.split(' ')[1];

  // If no token is found, deny access
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded admin info to request object
    req.admin = decoded;

    // Proceed to the next middleware or controller
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
