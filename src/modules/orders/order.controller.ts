// order.controller.ts
import { Request, Response } from 'express';
import { Order } from './order.interface';
import orderService from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, productId, price, quantity } = req.body;

    // Validate request body
    if (!email || !productId || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Create new order
    const newOrder: Order = {
      email,
      productId,
      price,
      quantity,
    };

    const createdOrder = await orderService.createOrder(newOrder);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: createdOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

export default {
  createOrder,
};
