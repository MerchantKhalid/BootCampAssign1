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

// serach a product
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: 'Missing searchTerm parameter',
      });
    }

    const result = await Productservice.searchProducts(searchTerm.toString());
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found matching name '${searchTerm}'`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Products matching name '${searchTerm}' fetched successfully`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Products couldn't be fetched`,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};
