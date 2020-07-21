
import { Response } from 'express';

export interface ErrorHandle {
    statusCode: number;
    status: string;
    ok: boolean;
    message: string
}


export const handleError = ( error: ErrorHandle, res: Response ) => {
    const { statusCode = 500 } = error;
    return res.status( statusCode ).json( {...error} );
};