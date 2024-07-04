import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductById = async (productId: string, updateData: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

// search a product
const searchProducts = async (searchTerm: string) => {
  const query = {
    name: { $regex: searchTerm, $options: 'i' },
  };

  const result = await Product.find(query);

  // Check if no products were found
  if (result.length === 0) {
    throw new Error(`No products found matching name '${searchTerm}'`);
  }

  return result;
};

// delete a product
const deleteProductById = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const Productservice = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};
