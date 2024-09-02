import { IPedido } from '@interfaces/IPedido';
import { Schema, model } from 'mongoose';

const PedidoSchema: Schema = new Schema({
    valor: { type: Number, required: true },
    mesa: { type: Number, required: true },
    platos: { type: Array, required: true },//Array de IPlato
});

const PedidoModel = model<IPedido>('Pedidos', PedidoSchema);
export default PedidoModel;