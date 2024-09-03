import express from "express";
import cors from "cors";
import Routes from "@routes/index";

const app = express();

// CORS configuration
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
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
