import mongoose, { Schema } from 'mongoose';
import { Order } from './order.interface';

// Define a schema
const OrderSchema: Schema = new Schema({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderModel = mongoose.model<Order>('Order', OrderSchema);

export default OrderModel;
