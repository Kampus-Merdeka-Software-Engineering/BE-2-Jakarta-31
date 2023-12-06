import express  from "express"
import { postCreateCritics, readCritics } from "../controller/criticsController.js"
import {userSession } from "../controller/userController.js"

const router = express.Router();

router.get("/", readCritics);
router.post("/", postCreateCritics);

export default router;
