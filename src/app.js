import express from 'express';
import cors from 'cors';
import routes from './routes';
// database loader
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
// Comentário qualquer
export default new App().server;
