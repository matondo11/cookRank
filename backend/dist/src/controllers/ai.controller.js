import { analyzeFood } from "../services/ai.service.js";
export const analyze = async (req, res) => {
    try {
        const { imageUrl } = req.body;
        const result = await analyzeFood(imageUrl);
        res.json({ result });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//# sourceMappingURL=ai.controller.js.map