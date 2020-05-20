import 'dotenv/config';

import express, { json } from 'express';
import cors from 'cors';

import routes from './routes';

class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(cors());
        this.express.use(json());
    }

    routes() {
        this.express.use(routes);
    }
}

export default new App().express;