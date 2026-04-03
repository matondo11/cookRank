import type{Request, Response } from "express";
import { analyzeFood } from "../services/ai.service";


export const analyze = async (req: Request, res: Response) => {
  try {
    const { imageUrl } = req.body;
    const result = await analyzeFood(imageUrl);
    res.json({ result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};