import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld (request:Request, response:Response) {
  const user = createUser(
    {
      email: 'eduardodroubi@gmail.com',
      password: 'teste123',
      techs: [
        'NodeJS',
        'ReactJS',
        'React Native',
        { title: 'Javascript', experience: 100 }
      ]
    }
  );
  
  return response.json({ message: 'Hello World' });
};