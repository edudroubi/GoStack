// src/routes/index.ts
import { Router } from 'express';
import appoitmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appoitments', appoitmentsRouter);
routes.use('/users', usersRouter);

export default routes;
