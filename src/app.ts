import express, { Application } from "express";
import Routes from "@routes/index";
import cors from "cors";
const app: Application = express();
// Lista de orígenes permitidos desde .env
const whitelist = process.env.WHITELIST
    ? process.env.WHITELIST.split(",")
    : ["*"];

// Configuración de CORS
const corsOptions = {
    origin: function (origin: string | undefined, callback: Function) {
        if (origin === undefined) return callback(null, true);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            // Permitir si el origen está en la lista o si la solicitud no tiene origen (por ejemplo, solicitudes desde el mismo origen)
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
// MIDDLEWARE
app.set("trust proxy", true);
app.use(express.json());
app.use(cors(corsOptions)); // Usar CORS con la configuración personalizada
app.use(express.urlencoded({ extended: true }));
// IMPORTAR ROUTER
const routes = new Routes();
app.use("/api", routes.getRouter);

export default app;