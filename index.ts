import app from "@/app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const PORT = parseInt(process.env.PORT ?? "3000");

const startServer = (port: number) => {
  app
    .listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
    .on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.log(
          `The port ${port} is already in use, trying the next one...`
        );
        startServer(port + 1); // Try the next port
      } else {
        console.log("An error occurred while trying to start the server", err);
      }
    });
};


mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://${process.env.user}:${process.env.pass}@${process.env.cluster}.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to the database successfully");
    startServer(PORT);
  })
  .catch((err: any) => {
    console.error("Error connecting to the database", err);
  });
