import { IFactura } from "@interfaces/IFactura";
import { Schema, model } from "mongoose";

const FacturaSchema = new Schema({
    idPedido: { type: String, required: true },
    saldo: { type: Number, required: true, min: 0 },
    idCliente: { type: String, required: true },
    fecha: { type: Date, required: true, default: Date.now },
});

const FacturaModel = model<IFactura>("Facturas", FacturaSchema);
export default FacturaModel;