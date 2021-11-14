import { ProductModel as Product } from '../models/Product';
import { CustomException } from '../exceptions/CustomException';
import { MovimentModel as Moviment } from '../models/Moviment';
export class RemoveProductService {
  async execute(id: string, value: number) {
    const doc = await Product.findOne({ id });

    if (doc.qtd < value) {
      throw new CustomException(
        'A quantidade a ser retirada não pode ser maior que a atual em estoque'
      );
    }

    const newValue = doc.qtd - value;

    await Product.updateOne({ id }, { qtd: newValue, createdAt: new Date() });

    const moviment = new Moviment({
      moment: new Date(),
      product: {
        name: doc.name,
        qtd: value,
        price: doc.price
      },
      type: 1 // Saída,
    });

    await moviment.save();
  }
}
