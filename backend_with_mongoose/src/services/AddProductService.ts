import { ProductModel as Product } from '../models/Product';
import { MovimentModel as Moviment } from '../models/Moviment';

export class AddProductService {
  async execute(id: string, value: number) {
    const doc = await Product.findOne({ id });

    const newValue = doc.qtd + value;

    await Product.updateOne({ id }, { qtd: newValue, updatedAt: new Date(), });

    const moviment = new Moviment({
      moment: new Date(),
      product: {
        name: doc.name,
        qtd: value,
        price: doc.price
      },
      type: 0 // Entrada,
    });

    await moviment.save();

  }
}
