export interface IUsuarioToken {
    _id: string;
    name: string;
    rol: "Admin" | "Mesero" | "Cocinero" | "Cliente";
}