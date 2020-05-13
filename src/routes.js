import { Router } from 'express';
// controllers
import ContactController from './app/controllers/ContactController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
// routes instance
const routes = new Router();

// contact route
routes.post('/contact', ContactController.store);
// session route
routes.post('/session', SessionController.store);
// user routes
routes.post('/users', UserController.store);
// from here every route must have the authentication token

export default routes;
