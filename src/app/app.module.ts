import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CartshopComponent } from './components/cartshop/cartshop.component';
import { CartdetalleComponent } from './components/cartdetalle/cartdetalle.component';
import { ProcesscompraComponent } from './components/processcompra/processcompra.component';
import { NavcartComponent } from './components/navcart/navcart.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AuthGuard } from './auth.guard';
import { TokeninterceptorService } from './services/tokeninterceptor.service';

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
    CategoriasComponent,
    CartshopComponent,
    CartdetalleComponent,
    ProcesscompraComponent,
    NavcartComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
