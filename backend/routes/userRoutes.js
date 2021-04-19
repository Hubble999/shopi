import express from 'express';
import { authUser, profileUser, createUser } from '../controllers/userController.js';
import protectMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protectMiddleware, profileUser);
router.route('/').post(createUser);

export default router;
