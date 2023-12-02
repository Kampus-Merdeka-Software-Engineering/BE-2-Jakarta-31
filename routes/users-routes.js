import express from "express";
import { createUser, getAllUsers, loginUser, logoutUser, userSession } from "../controller/userController.js";
import {checkAuth} from "../middleware/middleware.js";

const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', createUser);
router.post('/protected',checkAuth, userSession);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


export default router;
