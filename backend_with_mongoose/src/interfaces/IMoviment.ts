import { IProduct } from "./IProduct";

export interface IMoviment {
  id: string;
  moment: Date,
  product: IProduct;
  type: number;
}
