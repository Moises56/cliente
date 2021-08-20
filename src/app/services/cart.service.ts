import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Productos } from '../models/productos';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  productos = Productos;
  items: any[] = [];
  // encontrado = false;

  private URLDES = 'http://localhost:3000/carshop';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


    // *1 CARRITO DE COMPRAS
   // tslint:disable-next-line:typedef
   addCarrito(producto: any){
    let encontrado = false;
    this.items.forEach((elemento) => {
      // console.log(producto._id);
      if ( elemento._id === producto._id ) {
        // console.log('Encontrado: ', producto._id);
        encontrado = true;
        elemento.cantidad += 1;
        elemento.precio += elemento.precio;
      }
    });

    if (!encontrado) {
      this.items.push(producto);
    }

    // return this.items;
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }



  // tslint:disable-next-line:typedef
  clearCarrito(producto: any){
    this.items.push(producto);
  }


  // * Listar Productos Selecionados
  // tslint:disable-next-line:typedef
  listCarrito(){
    this.items = JSON.parse(localStorage.getItem('carrito') || '{}');
    return this.items;
  }

    // * Eliminar un Producto Selecionado del Carrito
  // tslint:disable-next-line:typedef
  deletePro(id: any){
    const result = this.items.findIndex(e => e._id === id);
    this.items.splice(result, 1);
    localStorage.setItem('carrito', JSON.stringify(this.items));
    // return this.items;

  }

  // *2 Guardar una Orden
  saveOrden(data: any): Observable<any>{
    // let datos = this.items.
    localStorage.removeItem('carrito');
    return this.httpClient.post(
      this.URLDES + `/${data.idUser}/orden`
      ,
      {
        user: data.idUser,
        direccion: data.infor.direccion,
        email: data.infor.email,
        cart: {
            _id: data.id,
            nombreProducto: data.nombreProducto,
            descripcion: data.descripcion,
            precio: data.precio,
            imagenProducto: data.imagenProducto,
            cantidad: data.cantidad,
            disponible: data.disponible
          }
      }
    );
  }


  




}
