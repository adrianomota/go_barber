import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());

app.use('/api', routes);

const PORT = 3333 || process.env.PORT;

app.listen(3333, () => {
  console.log(`🚀 Server running on PORT ${PORT} 😎`);
});
