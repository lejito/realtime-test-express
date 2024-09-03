import ChatController from "@/controllers/chat.controller";
import { Router } from "express";

export default class ChatRoutes {
  private _router = Router();
  private _controller: ChatController;

  constructor() {
    this._controller = new ChatController();
    this._initializeRoutes();
  }

  private _initializeRoutes() {
    this._router.get("/", this._controller.getMessages.bind(this._controller));
  }

  get getRouter() {
    return this._router;
  }
}
