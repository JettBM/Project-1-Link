import { Router } from "express"
import { quests } from "../data/quests";

const router = Router();

router.get('/', (req, res) => {
    res.json(quests);
});

export default router;