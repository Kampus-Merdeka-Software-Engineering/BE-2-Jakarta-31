import express from "express";
import { createUser, getAllUsers, loginUser, logoutUser, userSession, saveSubscriber } from "../controller/userController.js";
import {checkAuth} from "../middleware/middleware.js";

const router = express.Router();

router.get('/', checkAuth, getAllUsers);
router.post('/register', createUser);
router.post('/protected',checkAuth, userSession);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);
router.post('/subscribe', saveSubscriber);


export default router;
