import { Router } from 'express';
import UserController from '../controller/user.controller.js';
import { vaildateMiddleWare } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register',UserController.RegisterUser)
router.post('/login',UserController.LoginUser)
router.get('/profile',vaildateMiddleWare,UserController.ProfileUser)

export default router;
