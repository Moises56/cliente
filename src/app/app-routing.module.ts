import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*components*/
import {InicioComponent} from './components/inicio/inicio.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {AuthComponent} from './components/auth/auth.component';
import {CategoriasComponent} from './components/categorias/categorias.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{
  path: 'inicio',
  component: InicioComponent
},
{
  path: 'perfil',
  component: PerfilComponent
},
{
  path: 'signin',
  component: AuthComponent
},
{
  path: 'signup',
  component: AuthComponent
},
{
  path: 'categorias',
  component: CategoriasComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
