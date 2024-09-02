export interface ISubReceta {
    _id: string;
    nombre: string;
    precioUnitario: number;
    insumos: string[];//IInsumo[] En el modelo se tendra un array de string con los ids de los insumos, el endopoint de insumos se encargara de devolver los insumos completos
}