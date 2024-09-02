import { Router } from "express";
import HomeController from "@controllers/home.controller";

export default class HomeRoutes {
  private _router = Router();
  private _controller: HomeController;

  constructor() {
    this._controller = new HomeController();
    this._initializeRoutes();
  }

  private _initializeRoutes() {
    this._router.get("/", this._controller.welcome);
  }

  get getRouter() {
    return this._router;
  }
}
