import express from 'express';
import { changeAdmin } from '../controller/authController.js';
import { isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

import { loginUser, registerUser } from '../controller/authController.js';

router.route('/login').post(loginUser);
router.route('/user').post(changeAdmin);

router.route('/').post(registerUser);

export default router;
