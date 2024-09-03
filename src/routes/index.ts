import { Router } from "express";
import HomeRoutes from "@routes/home.routes";
import ChatRoutes from "./chat.routes";

export default class Routes {
  private _router = Router();
  private _homeRoutes: HomeRoutes;
  private _chatRoutes: ChatRoutes;

  constructor() {
    this._homeRoutes = new HomeRoutes();
    this._chatRoutes = new ChatRoutes();
    this._initializeRoutes();
  }

  private _initializeRoutes() {
    this._router.use("/", this._homeRoutes.getRouter);
    this._router.use("/chat", this._chatRoutes.getRouter);
  }

  get getRouter() {
    return this._router;
  }
}
