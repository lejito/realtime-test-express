import app from "@/app";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import { Server } from "http";
import { Server as WebSocketServer } from "socket.io";
import WebSocketHandler from "@/utils/websocket.handler";

const server = http.createServer(app);

dotenv.config();
const PORT = parseInt(process.env.PORT ?? "3000");

function startHttpServer(server: Server, port: number) {
  server
    .listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
    .on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.log(
          `The port ${port} is already in use, trying the next one...`
        );
        startHttpServer(server, port + 1); // Try the next port
      } else {
        console.log("An error occurred while trying to start the server", err);
      }
    });
  return server;
}

function startWebSocketServer(server: Server) {
  const io = new WebSocketServer(server, { cors: { origin: "*" } });
  return io;
}

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${process.env.user}:${process.env.pass}@${process.env.cluster}.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to the database successfully");
    const httpServer = startHttpServer(server, PORT);
    const io = startWebSocketServer(httpServer);
    new WebSocketHandler(io); // Initialize the WebSocket handler (initialize the events)
  })
  .catch((err: any) => {
    console.error("Error connecting to the database", err);
  });
