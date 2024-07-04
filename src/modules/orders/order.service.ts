// import mongoose from 'mongoose';
// import { TProduct } from '../products/product.interface';
// import { Product } from '../products/product.model';
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

//Checking
// const createOrder = async (payload: TOrder) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     // Find the product by ID and cast it to TProduct
//     const productDoc = await Product.findById(payload.productId).session(
//       session
//     );

//     if (!productDoc) {
//       throw new Error('Product not found');
//     }

//     // Type assertion to treat productDoc as TProduct
//     const product = productDoc.toObject() as TProduct;

//     // Assuming we are dealing with the first inventory item
//     const inventory = product.inventory[0];

//     // Check if there is sufficient stock
//     if (inventory.quantity < payload.quantity) {
//       throw new Error('Insufficient stock');
//     }

//     // Create the order
//     const createdOrder = await OrderModel.create([payload], { session });

//     // Update the product inventory quantity and inStock status
//     inventory.quantity -= payload.quantity;
//     inventory.inStock = inventory.quantity > 0;
//     productDoc.set('inventory', product.inventory); // Update the inventory field in the document

//     await productDoc.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return createdOrder;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw new Error('Failed to create order: ');
//   }
// };

// get all orders or filter by email
// const getOrdersEmail = async (email?: string) => {
//   let query = {};

//   if (email) {
//     query = { email };
//   }

//   const result = await OrderModel.find(query);
//   return result;
// };

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
