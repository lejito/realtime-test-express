import { ISubReceta } from "@interfaces/ISubReceta";
import { Schema, model } from "mongoose";

const SubRecetaSchema = new Schema({
    nombre: { type: String, required: true },
    insumos: { type: Array, required: true },
    precioUnitario: { type: Number, required: true },
});

const SubRecetaModel = model<ISubReceta>("SubReceta", SubRecetaSchema);

export default SubRecetaModel;