export interface IFactura {
    _id: string;
    idPedido: string;
    saldo: number;
    idCliente: string;
    fecha: Date;
}