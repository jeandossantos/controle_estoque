import { ProductModel as Product } from "../models/Product";

export class FindAllProductsService {
    async execute() {
        const docs = await Product.find();

        return docs;
    }
}