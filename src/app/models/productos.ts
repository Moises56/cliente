export class Productos{
    constructor(
        public id: any,
        public nombreProducto: string,
        public descripcion: string,
        public precio: number,
        public imagenProducto: string,
        public cantidad: number,
        public disponible: boolean
    ){}
}
