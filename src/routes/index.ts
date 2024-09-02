import { Router } from "express";
import HomeRoutes from "@routes/home.routes";

export default class Routes {
  private _router = Router();
  private _homeRoutes: HomeRoutes;

  constructor() {
    this._homeRoutes = new HomeRoutes();
    this._initializeRoutes();
  }

  private _initializeRoutes() {
    this._router.use("/", this._homeRoutes.getRouter);
  }

  get getRouter() {
    return this._router;
  }
}
