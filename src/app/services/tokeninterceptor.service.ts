import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsuariosService} from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private usuariosService: UsuariosService) { }

  intercept(req: any, next: any){
    const tokenizeReq = req.clone({
       setHeaders: {
         Authorization: `Bearer ${this.usuariosService.getToken()}`
       }
     });
    return next.handle(tokenizeReq);
   }
}
