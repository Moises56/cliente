import { Component, ViewChild, OnInit } from '@angular/core';
import { CartshopComponent } from '../cartshop/cartshop.component';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CategoriasService } from './../../services/categorias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('carShop') CartshopComponent!: CartshopComponent;

faBars = faBars;
closeResult = '';
public isMenuCollapsed = true;
  title = 'cliente';
  // tslint:disable-next-line:ban-types
  regionVisible: String = '';

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
     // *Detalle Clase 
     this.categoriasService.onProductos
     .subscribe(
       res => {
         this.regionVisible = 'cartdetalle';
       },
       err => console.log(err)
     );

     // *Empresas
     this.categoriasService.onEmpresas
    .subscribe(
      res => {
        console.log(res);
        this.regionVisible = 'cartshop';
      },
      err => console.log(err)
    );
  }
   // tslint:disable-next-line:typedef
   abrirNewApp(modal: any){
    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: false
      }
    );
  }

  // tslint:disable-next-line:typedef
  registrarse(){
    console.log('registrarse');
    this.router.navigate(['/signup']);
  }

  // *Recibiendo Id desde CategoriaCompents 
  // * y Enviadolo a carshopComponets 
  // tslint:disable-next-line:typedef
  selCategoria(idCat: any){
    console.log('appCom: ', idCat);
    // this.CartshopComponent.getEmpresas(idCat);
    this.regionVisible = 'inicio';
  }


  // tslint:disable-next-line:typedef
  inicio(){
    this.regionVisible = 'inicio';
  }


}
