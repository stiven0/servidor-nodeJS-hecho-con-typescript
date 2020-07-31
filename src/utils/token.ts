require('dotenv').config();
import { sign } from 'jsonwebtoken';

export const generateToken = ( payload: string ) => {
    return sign( { usuario: payload }, String(process.env.SECRET_TOKEN), { expiresIn: '3h' } );
};