import { Request, Response } from "express";
import { RemoveProductService } from "../services/RemoveProductService";

export class RemoveProductController {
    async handle(req: Request, res: Response) {
        const { id, value } = req.body;

        const service = new RemoveProductService();

        await service.execute(id, Number(value));

        return res.send();
    }
}