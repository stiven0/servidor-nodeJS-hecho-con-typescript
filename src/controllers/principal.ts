require('dotenv').config();
import { Request, Response } from 'express';
import { handleError } from '../error/handle-error';
import { generateToken } from '../utils/token';
import { sign } from 'jsonwebtoken';


  // ruta principal de la app
  export const principal = (req:Request, res:Response) => {

     const token = generateToken( '1234' );
    

    return res.status(200).json({ ok : true, message : 'HOLA MUNDO', token });
  };
