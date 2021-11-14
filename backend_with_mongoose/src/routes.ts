import { Router } from 'express';
import { AddProductController } from './controllers/AddProductController';
import { CreateProductController } from './controllers/CreateProductController';
import { DeleteProductController } from './controllers/DeleteProductController';
import { FindAllProductsController } from './controllers/FindAllProductsController';
import { ListMovimentsController } from './controllers/ListMovimentsController';
import { RemoveProductController } from './controllers/RemoveProductController';
import { UpdateProductController } from './controllers/UpdateProductController';

const routes = Router();

routes.post('/products', new CreateProductController().handle);
routes.get('/products', new FindAllProductsController().handle);
routes.delete('/products/:id', new DeleteProductController().handle);
routes.put('/products/add', new AddProductController().handle);
routes.put('/products/remove', new RemoveProductController().handle);
routes.put('/products/:id', new UpdateProductController().handle);

routes.get('/moviments', new ListMovimentsController().handle);

export { routes }