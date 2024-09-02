export interface IReceta {
    _id: string;
    nombre: string;
    habilitado: boolean;
    precioUnitario: number;
    precioVenta: number;
    subRecetas: string[];// ISubReceta[] En el modelo se tendra un array de string con los ids de las subrecetas, el endopoint de subrecetas se encargara de devolver las subrecetas completas
}

