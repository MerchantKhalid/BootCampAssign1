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

// get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await Productservice.getProductById(productId);
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

// update product
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await Productservice.updateProductById(
      productId,
      updateData
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product couldn't be updated",
      error: error,
    });
  }
};

// delete a product
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await Productservice.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product couldn't be deleted",
      error: error,
    });
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
