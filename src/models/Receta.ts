import { IReceta } from '@interfaces/IReceta';
import { Schema, model } from 'mongoose';

const RecetaSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    subRecetas: { type: Array, required: true },
    precioUnitario: { type: Number, required: true },
    precioVenta: { type: Number, required: true },
    habilitado: { type: Boolean, required: true, default: false }
});


const RecetaModel = model<IReceta>('Receta', RecetaSchema);

export default RecetaModel;