import { CustomRequest } from "@interfaces/CustomRequest";
import { IUsuarioToken } from "@interfaces/IUsuarioToken";
import { Rol } from "@interfaces/Rol";
import { Response } from "express";
const { verifyToken } = require("../services/JwtService");

require("express");

export const AuthMiddleware = (req: CustomRequest, res: Response, next: any) => {
    try {
        const { authorization } = req.headers;
        const token = authorization?.split(" ")[1];

        const user: IUsuarioToken = verifyToken(token);
        // Alternativa para guardar la información del usuario a lo largo de la solicitud

        req.user = user;
        next();
    } catch (error) {

        //TODO: Capturar el error especifico del token
        return res.sendStatus(400).json({
            ok: false,
            message: "Error Auth Middleware, token not valid",
        });
    }

    return;
};


export const RolMiddleware = (rol: Rol) => {
    return (req: CustomRequest, res: Response, next: any) => {
        try {
            const user = req.user;
            if (!user) throw { status: 401, message: "Error user not authorized" };
            if (user.rol != rol) throw { status: 401, message: "Error rol requirement not satisfied" };
            next();
        } catch (error: any) {
            //TODO: Capturar el error especifico del token
            return res.status(error.status ?? 400).json({
                ok: false,
                message: error.message ?? "Error rol requirement not satisfied",
            });
        }

        return;
    };

}

