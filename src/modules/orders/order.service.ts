import { TOrder } from './order.interface';
import OrderModel from './order.model';

const createOrder = async (payload: TOrder) => {
  try {
    const createdOrder = await OrderModel.create(payload);
    return createdOrder;
  } catch (error) {
    throw new Error('Failed to create order in database');
  }
};

// get all orders
const getAllOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrdersEmail = async (email?: string) => {
  // const result = await OrderModel.findById(email);
  let query = {};

  if (email) {
    query = { email };
  }
  const result = await OrderModel.find(query);
  return result;
};

export default {
  createOrder,
  getAllOrders,
  getOrdersEmail,
};
