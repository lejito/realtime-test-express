export interface IUsuario {
    _id: string;
    name: string;
    correo: string;
    clave: string;
    celular: string;
    rol: "Admin" | "Mesero" | "Cocinero" | "Cliente";
    puntos?: number;
    fechaCreacion: Date;
}