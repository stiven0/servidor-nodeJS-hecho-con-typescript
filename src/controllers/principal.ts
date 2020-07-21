require('dotenv').config();
import { Request, Response } from 'express';
import { handleError } from '../error/handle-error';


  // ruta principal de la app
  export const principal = (req:Request, res:Response) => {
    
    return res.status(200).json({ ok : true, message : 'HOLA MUNDO' });
  };
