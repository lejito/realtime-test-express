import { IPlato } from "@interfaces/IPlato";

export interface IPedido {
    _id: string;
    valor: number;
    mesa: number;
    platos: IPlato[];
}

