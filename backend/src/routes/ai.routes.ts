import { Router } from "express";
import { analyze } from "../controllers/ai.controller";

const router = Router();

router.post("/analyze", analyze);

export default router;