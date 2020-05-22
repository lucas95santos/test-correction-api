import { Router } from 'express';
// controllers
import ContactController from './app/controllers/ContactController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SchoolClassController from './app/controllers/SchoolClassController';
import StudentController from './app/controllers/StudentController';
// middlewares
import authMiddleware from './app/middlewares/auth';
// routes instance
const routes = new Router();

// contact route
routes.post('/contact', ContactController.store);
// session route
routes.post('/session', SessionController.store);
// user routes
routes.post('/users', UserController.store);
// from here every route must have the authentication token
// schooll classes routes
routes.post('/classes', authMiddleware, SchoolClassController.store);
routes.get('/classes', authMiddleware, SchoolClassController.index);
// students routes
routes.post('/students', authMiddleware, StudentController.store);
routes.get('/students', authMiddleware, StudentController.index);

export default routes;
