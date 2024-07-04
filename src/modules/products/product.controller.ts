import { Request, Response } from 'express';
import { Productservice } from './product.service';

// Create Product
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await Productservice.createProduct(productData);
  res.json({
    success: true,
    message: 'product created successfully',
    data: result,
  });
};

// get Product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await Productservice.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'product fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "product couldn't fetched ",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
