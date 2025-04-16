import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { programRoutes } from './routes/programs';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/programs', programRoutes);

export default app;  
