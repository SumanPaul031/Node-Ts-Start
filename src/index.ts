import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { APP_PORT } from '#/constants/app.constants';

dotenv.config();

export const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(APP_PORT, () => {
  console.log(`Express is listening at http://localhost:${APP_PORT as string}`);
});
