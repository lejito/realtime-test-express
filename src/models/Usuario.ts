import { IUsuario } from "@interfaces/IUsuario";
import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
    name: { type: String, required: true, trim: true },
    correo: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    clave: { type: String, required: true, minlength: 6 },
    celular: { type: String, required: true, unique: true },
    rol: { type: String, required: true, enum: ["Admin", "Mesero", "Cocinero", "Cliente"] },
    puntos: { type: Number, required: false, min: 0 },
    fechaCreacion: { type: Date, required: true, default: Date.now },
});


const UsuarioModel = model<IUsuario>('Usuarios', UsuarioSchema);
export default UsuarioModel;