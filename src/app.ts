// src/index.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/products/product.route';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Mr,');
});

export default app;
