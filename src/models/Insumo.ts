import { IInsumo } from "@interfaces/IInsumo";
import { Schema, model } from "mongoose";

const InsumoSchema = new Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 0, default: 0 },
    imagen: { type: String, required: true },
    precioUnitario: { type: Number, required: true },
});

const InsumoModel = model<IInsumo>("Insumo", InsumoSchema);

export default InsumoModel;