import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEmpresas: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductos: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onIdCat: EventEmitter<any> = new EventEmitter();
  
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onIdEmp: EventEmitter<any> = new EventEmitter();

  // ?Para Produccion
  private URLPRO = 'https://somopa.herokuapp.com/admin';

  // ?Para Desarrollo
  private URLDES =  'http://localhost:3000/admin';

  constructor(
    private httpClient: HttpClient
    ) { }

    // *1 Obener todas las Categorias
    getCategorias(): Observable<any>{
      return this.httpClient.get(this.URLDES + '/categorias', {});
    }
 
    // *2 Obener todas las  Empresas de una Categorias
    getEmpresaCategory(idCat: any): Observable<any>{
      return this.httpClient.get(this.URLDES + `/${idCat}/empresas`, {});
    }
   
    // * Obener Detalle producto seleccionado
    getProductEmpresa(ids: any): Observable<any>{
      return this.httpClient.get(this.URLDES + `/${ids.idCat}/empresas/${ids.idEmpr}/producto/${ids.idPro}/detalleproducto`, {});
    }



}
