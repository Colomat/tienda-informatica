export class Producto {
    id: number;
    nombre: string ='';
    precio: number;
    descuento: number;

    constructor(id:number, nombre: string, precio:number, descuento:number){
      this.id=id;
      this.nombre=nombre;
      this.precio=precio;
      this.descuento=descuento;
    }
    
  }