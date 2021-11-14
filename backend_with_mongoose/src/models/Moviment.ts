import { Schema, model } from 'mongoose';
import { IMoviment } from '../interfaces/IMoviment';
import { schema as productSchema } from './Product';

const schema = new Schema<IMoviment>({
  moment: {
    type: Date,
  },
  product: {
    type: productSchema,
    default: {}
  },
  type: {
    type: Number,
    required: true
  }
});

const MovimentModel = model<IMoviment>('Moviment', schema);

export { MovimentModel }
