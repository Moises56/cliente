import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*components*/
import { AppComponent } from './components/app/app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CartshopComponent } from './components/cartshop/cartshop.component';
import { CartdetalleComponent } from './components/cartdetalle/cartdetalle.component';
import { ProcesscompraComponent } from './components/processcompra/processcompra.component';
import { NavcartComponent } from './components/navcart/navcart.component';

import { AuthGuard } from './auth.guard';



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
  path: 'signin',
  component: AuthComponent
 },
 {
  path: 'signup',
  component: AuthComponent
 },
 {
  path: 'perfil',
  component: PerfilComponent,
  canActivate: [AuthGuard] // * Protegiendo la ruta

 },
 {
  path: 'categorias',
  component: CategoriasComponent
 },
 {
  path: 'cartshop/:idcat',
  component: CartshopComponent
 },
//  {
//   path: 'navcart/:idPro',
//   component: NavcartComponent
//  },
{
  path: 'cartdetalle/:idpro',
  component: CartdetalleComponent
},
{
  path: 'processcompra',
  component: ProcesscompraComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
