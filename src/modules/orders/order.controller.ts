import { Request, Response } from 'express';

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
    const newOrder = {
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

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order couldn't fetched ",
      error: error,
    });
  }
};
export const OrderControllers = {
  createOrder,
  getAllOrders,
};
