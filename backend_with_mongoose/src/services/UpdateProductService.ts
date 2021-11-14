import { IProduct } from "../interfaces/IProduct";
import { ProductModel as Product } from "../models/Product";

export class UpdateProductService {
    async execute({ id, name, qtd, price }: IProduct) {
        await Product.updateOne({ id }, {
            name,
            price,
            qtd,
            updatedAt: new Date()
        });

        return;
    }
}