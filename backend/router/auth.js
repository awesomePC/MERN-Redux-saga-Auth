import express from 'express';
import { changeAdmin } from '../controller/userController';
import { isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

import { loginUser, registerUser } from '../controller/authController.js';

router.route('/login').post(loginUser);
router.route('/user').post(changeAdmin);

router.route('/').post(registerUser);

export default router;
