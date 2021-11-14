import { Request, Response } from "express";
import { DeleteProductService } from "../services/DeleteProductService";

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;
        const service = new DeleteProductService();

        await service.execute(id);

        return res.send();
    }
}