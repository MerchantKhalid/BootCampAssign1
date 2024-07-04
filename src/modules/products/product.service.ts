import { TProduct } from './product.validation';
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

const updateProductById = async (
  productId: string,
  updateData: Partial<TProduct>
) => {
  const result = await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

const searchProducts = async (searchTerm: string) => {
  try {
    const query = {
      name: { $regex: new RegExp(searchTerm, 'i') },
    };

    const result = await Product.find(query);

    return result;
  } catch (error) {
    throw new Error(`Error searching products`);
  }
};

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
