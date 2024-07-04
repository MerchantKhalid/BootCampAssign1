import { Request, Response } from 'express';
import { Productservice } from './product.service';
import { ProductSchema } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = ProductSchema.parse(req.body);
    const result = await Productservice.createProduct(productData);
    res.json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid product data',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await Productservice.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products couldn't be fetched",
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await Productservice.getProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product couldn't be fetched",
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = ProductSchema.partial().parse(req.body);
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
    res.status(400).json({
      success: false,
      message: 'Invalid update data',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

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
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm || typeof searchTerm !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Invalid searchTerm parameter',
      });
    }

    const result = await Productservice.searchProducts(searchTerm.toString());

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found matching search term '${searchTerm}'`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Products could not be fetched',
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
