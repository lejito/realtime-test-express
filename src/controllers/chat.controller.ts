import Message from "@/models/Message";
import { Request, Response } from "express";

export default class ChatController {
  public async getMessages(_req: Request, res: Response): Promise<Response> {
    const messages = await Message.find();
    return res.json(messages);
  }
}
