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
    private URLDES =  ' http://localhost:3000/usercliente';

  constructor(private httpClient: HttpClient) { }


  // *1 Obener todas las Categorias
  signup(): Observable<any>{
    return this.httpClient.get(this.URLDES + '/user/signup', {});
  }


}
