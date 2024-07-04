import express from 'express';
import OrderController from './order.controller'; // Import Order controller

const router = express.Router();

router.post('/', OrderController.createOrder);

export const orderRoutes = router;
