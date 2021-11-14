import { IProduct } from "../interfaces/IProduct";
import { ProductModel as Product } from "../models/Product";

export class CreateProductService {
  async execute({ name, qtd, price }: IProduct) {
    const doc = new Product({
      name,
      qtd,
      price,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await doc.save();

    return doc;
  }
}
