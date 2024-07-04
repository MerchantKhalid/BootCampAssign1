import { Order } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (order: Order) => {
  try {
    const createdOrder = await OrderModel.create(order);
    return createdOrder;
  } catch (error) {
    throw new Error('Failed to create order in database');
  }
};

export default {
  createOrder,
};
