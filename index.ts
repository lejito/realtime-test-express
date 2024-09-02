import app from "@/app";
import dotenv from "dotenv";

dotenv.config();
const PORT = parseInt(process.env.PORT ?? "3000");

// Función para establecer el puerto del servidor o dinamicante cambiar el puerto por defecto si este esta ocupado 
const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en la url: localhost:${port}`);
  }).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`El puerto ${port} está en uso, intentando con otro puerto...`);
      startServer(port + 1); // Intentar con el siguiente puerto
    } else {
      console.error('Error al iniciar el servidor:', err);
    }
  });
};


//realizar la conexión con la base de datos en el cloud de mongo
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    `mongodb+srv://${process.env.user}:${process.env.pass}@${process.env.cluster}.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conexión con la base de datos establecida con exito..");
    startServer(PORT);
  })
  .catch((err: any) => {
    console.log("Ha ocurrido un error"), console.log(err);
  });


