import { Request, Response } from "express";
import { FindAllProductsService } from "../services/FindAllProductsService";

export class FindAllProductsController {
    async handle(req: Request, res: Response) {
        const service = new FindAllProductsService();

        const products = await service.execute();

        return res.json(products);
    }
}