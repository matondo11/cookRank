import express, {type Application } from 'express';
import cors from 'cors';
import router from './routes/ai.routes';


const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", router);

export default app;