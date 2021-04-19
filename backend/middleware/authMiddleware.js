import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith('Bearer')) {
    try {
      const decode = jwt.verify(token.split(' ')[1], process.env.SECRET_TOKEN);
      req.user = await User.findById(decode.id);
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error('Token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('No auth. No token');
  }

  next();
};

export default protect;
