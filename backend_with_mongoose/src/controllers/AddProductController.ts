import { Request, Response } from "express";
import { AddProductService } from "../services/AddProductService";

export class AddProductController {
    async handle(req: Request, res: Response) {
        const { id, value } = req.body;

        const service = new AddProductService();

        await service.execute(id, Number(value));

        return res.send();
    }
}