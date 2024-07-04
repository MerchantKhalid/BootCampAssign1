// src/index.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './modules/products/product.route';
import { orderRoutes } from './modules/orders/order.route';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Mr,');
});

export default app;
