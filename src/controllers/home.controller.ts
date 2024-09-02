import { Request, Response } from "express";

export default class HomeController {
  welcome(_req: Request, res: Response): Response {
    return res.json({ message: "Welcome to RealTime Test API!" });
  }
}
