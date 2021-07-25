import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CartshopComponent } from './components/cartshop/cartshop.component';
import { CartdetalleComponent } from './components/cartdetalle/cartdetalle.component';
import { ProcesscompraComponent } from './components/processcompra/processcompra.component';
import { NavcartComponent } from './components/navcart/navcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    MastheadComponent,
    ServicesComponent,
    AboutComponent,
    TeamComponent,
    FooterComponent,
    PerfilComponent,
    InicioComponent,
    CategoriasComponent,
    CartshopComponent,
    CartdetalleComponent,
    ProcesscompraComponent,
    NavcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
