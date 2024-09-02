import { IMessage } from "@interfaces/IMessage";
import { Schema, model } from "mongoose";

const MessagesSchema = new Schema({
  text: { type: String, required: true, trim: true },
  date: { type: Date, required: true, default: Date.now },
});

const Message = model<IMessage>("messages", MessagesSchema);
export default Message;
