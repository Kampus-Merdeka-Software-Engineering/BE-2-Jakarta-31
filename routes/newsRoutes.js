import express from "express";
import {getNewsByCategory} from "../controller/newsController.js";

const router = express.Router();

router.get('/', (req, res) => getNewsByCategory('general', res));
router.get('/sport', (req, res) => getNewsByCategory('sport', res));
router.get('/health', (req, res) => getNewsByCategory('health', res));
router.get('/technology', (req, res) => getNewsByCategory('technology', res));
router.get('/science', (req, res) => getNewsByCategory('science', res));
router.get('/entertainment', (req, res) => getNewsByCategory('entertainment', res));
router.get('/business', (req, res) => getNewsByCategory('business', res));

export default router;