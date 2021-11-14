import { Request, Response } from "express";
import { UpdateProductService } from "../services/UpdateProductService";

export class UpdateProductController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;
        const { name, qtd, price } = req.body;

        const service = new UpdateProductService();

        const product = await service.execute({
            id, name, qtd, price
        });

        return res.json(product);
    }
}