import express from "express";
import cors from "cors";
import questsRouter from "./routes/quests.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/quests', questsRouter)

app.listen(3000, () => {
    console.log(`server running on http://localhost:3000`);
});