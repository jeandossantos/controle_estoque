import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import './database';
import { CustomException } from './exceptions/CustomException';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.use((error: CustomException | Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomException) {
        return res.status(error.code).send(error.message);
    }

    if (error instanceof Error) {
        console.error(error.message);
    }

    return res.status(500).send('Internal Error');
});

app.listen(3001, () => console.log('Backend is running on port 3001...'));