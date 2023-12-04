import express from "express";
import { postCreateSubscriber } from "../controller/subsController.js";

const router = express.Router();

router.post('/', postCreateSubscriber);

export default router;