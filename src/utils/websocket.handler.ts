import Message from "@/models/Message";
import { Server, Socket } from "socket.io";

export default class WebSocketHandler {
  private _io: Server;

  constructor(io: Server) {
    this._io = io;
    this._initializeSocketEvents();
  }

  private _initializeSocketEvents() {
    this._io.on("connection", (socket: Socket) => {
      console.log("User connected:", socket.id);

      socket.on("message", async (msg) => {
        if (msg) {
          const message = new Message({ text: msg, date: new Date() });
          await message.save();
          console.log("Message saved:", msg);
          this._io.emit("message", msg);
        }
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }
}
