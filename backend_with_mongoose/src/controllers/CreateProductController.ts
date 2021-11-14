import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

export class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, qtd, price } = req.body;

        const service = new CreateProductService()

        const product = await service.execute({
            name, qtd, price
        });

        return res.json(product);
    }
}