import { MovimentModel as Moviment } from "../models/Moviment";


export class ListMovimentsService {
  async execute() {
    const docs = await Moviment.find();
    return docs;
  }

  getMovimentType(value: number) {
    if (value === 0) {
      return 'ENTRADA'
    } else if (value === 1) {
      return 'SAÍDA'
    }
  }

}
