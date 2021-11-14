import { Request, Response } from "express";
import { ListMovimentsService } from "../services/ListMovimentsService";

export class ListMovimentsController {
  async handle(req: Request, res: Response) {
    const service = new ListMovimentsService();

    const moviments = await service.execute();

    return res.json(moviments);
  }
}
