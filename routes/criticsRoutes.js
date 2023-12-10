import express  from "express"
import { postCreateCritics } from "../controller/criticsController.js"

const router = express.Router();

router.post("/", postCreateCritics);

export default router;
