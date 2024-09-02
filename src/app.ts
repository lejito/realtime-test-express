import express, { Application } from "express";
import Routes from "@routes/index";
import cors from "cors";
const app: Application = express();

// CORS whitelist
const whitelist = process.env.WHITELIST
  ? process.env.WHITELIST.split(",")
  : ["*"];

// CORS configuration
const corsOptions = {
  origin: function (origin: string | undefined, callback: Function) {
    if (origin === undefined) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // If the origin is in the whitelist or if it is undefined (same origin), allow the request
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Middlewares
app.set("trust proxy", true);
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Use the routes
const routes = new Routes();
app.use("/api", routes.getRouter);

export default app;
