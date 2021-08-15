import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    // ?Para Produccion
    private URLPRO = 'https://somopa.herokuapp.com/usercliente';

    // ?Para Desarrollo
    private URLDES =  'http://localhost:3000/usercliente';

  constructor(private httpClient: HttpClient) { }


  // *2 registro usuario Cliente
  signup(data: any): Observable<any>{
    return this.httpClient.post(
      this.URLDES + '/user/signup',
      {
        nombre: data.user.nombre,
        apellido: data.user.apellido,
        email: data.user.email,
        password: data.user.password,
        confir_password: data.user.confir_password
      }
    );
  }


}
