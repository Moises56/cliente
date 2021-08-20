import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  canActivate(): boolean{
    if (this.usuariosService.loggedIng()){
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
  
}
