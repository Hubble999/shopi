import jwt from 'jsonwebtoken';

export default (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: '30d' });
};
