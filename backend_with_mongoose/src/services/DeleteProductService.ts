import { ProductModel as Product } from "../models/Product";

export class DeleteProductService {
    async execute(id: string) {
        await Product.deleteOne({ id });
        return;
    }
}