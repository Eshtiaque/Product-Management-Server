import { Product } from './product.interface';
import { ProductModel } from './product.model';

//create data with product
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
//gate all product
const getAllProductsFromDB = async (
  searchTerm: object,
): Promise<Product[] | null> => {
  const result = await ProductModel.find(searchTerm);
  return result;
};
// gate single product
const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};
//delete product from database
const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};
//update a single product
const updateProductFromDB = async (
  _id: string,
  updateData: Partial<Product>,
) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(_id, updateData, {
      new: true,
      runValidators: true,
    }).exec();
    return result;
  } catch (error) {
    console.error(`Failed to update product with id ${_id}:`, error);
    throw error; 
  }
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
