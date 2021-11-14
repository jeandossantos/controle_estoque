import { model, Schema } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';

const schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  qtd: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});


const ProductModel = model<IProduct>('Product', schema);

export { ProductModel, schema }
