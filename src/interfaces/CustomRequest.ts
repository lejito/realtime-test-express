import { Request, } from "express";
import { IUsuarioToken } from "@interfaces/IUsuarioToken";
export interface CustomRequest extends Request {
    headers: {
        authorization?: string;
    };
    user?: IUsuarioToken;
}
