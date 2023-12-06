import express from "express";
import { postCreateUser, getAllUsers, loginUser, logoutUser, userSession } from "../controller/userController.js";
import {checkAuth} from "../middleware/middleware.js";

const router = express.Router();

router.get('/', checkAuth, getAllUsers);
router.post('/register', postCreateUser);
router.post('/protected',checkAuth, userSession);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);



export default router;
