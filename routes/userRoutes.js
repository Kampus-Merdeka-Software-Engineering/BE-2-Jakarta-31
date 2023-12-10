import express from "express";
import { postCreateUser, loginUser, userSession } from "../controller/userController.js";
import {checkAuth} from "../middleware/middleware.js";

const router = express.Router();

router.post('/register', postCreateUser);
router.post('/protected',checkAuth, userSession);
router.post('/login', loginUser);



export default router;
