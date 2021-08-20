import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    // ?Para Produccion
    private URLPRO = 'https://somopa.herokuapp.com/usercliente';

    // ?Para Desarrollo
    private URLDES =  'http://localhost:3000/usercliente/user';

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  // *1 Login Cliente
  signin(data: any): Observable<any>{
    return this.httpClient.post(
      this.URLDES + '/signin',
      {
        email: data.users.email,
        password: data.users.password
      }
    );
  }


  // *2 registro usuario Cliente
  signup(data: any): Observable<any>{
    return this.httpClient.post(
      this.URLDES + '/signup',
      {
        nombre: data.user.nombre,
        apellido: data.user.apellido,
        email: data.user.email,
        password: data.user.password,
        confir_password: data.user.confir_password
      }
    );
  }

    // tslint:disable-next-line:typedef
    loggedIng(){
      return !!localStorage.getItem('token');
    }

    // tslint:disable-next-line:typedef
    getToken(){
      return localStorage.getItem('token');
    }

    // tslint:disable-next-line:typedef
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('iduser');
      localStorage.removeItem('carrito');
      this.router.navigate(['/signin']);
    }


    // *Obtener un cliente y  Sus ordenes
    getOrdenCliente(idCliente: any): Observable<any>{
      return this.httpClient.get(this.URLDES + `/${idCliente}/ordenes`, {});
    }


  // private URLDES = 'http://localhost:3000/usercliente/user';

    // *1 AObtener Prodcto Seleccionad
    getProducto(idProducto: any): Observable<any>{
      return this.httpClient.get(this.URLDES + `/${idProducto}/producto`, {});
    }

}
