import { Mongoose } from "mongoose";

  declare namespace Express {
    export interface Request {
      usuario: string;
    }
  }

