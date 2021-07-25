import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*components*/
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthComponent } from './components/auth/auth.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CartshopComponent } from './components/cartshop/cartshop.component';
import { CartdetalleComponent } from './components/cartdetalle/cartdetalle.component';
import { ProcesscompraComponent } from './components/processcompra/processcompra.component';


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
{
  path: 'cartshop',
  component: CartshopComponent
},
{
  path: 'cartdetalle',
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
