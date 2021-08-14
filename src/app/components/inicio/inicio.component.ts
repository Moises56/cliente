import { Component, ViewChild, OnInit } from '@angular/core';
import { CartshopComponent } from '../cartshop/cartshop.component';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('carShop') CartshopComponent!: CartshopComponent;

  faBars = faBars;
  closeResult = '';
public isMenuCollapsed = true;
// tslint:disable-next-line:ban-types
regionVisible: String = '';
// tslint:disable-next-line:ban-types
mostrar: Boolean = true;

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  mostrarInit(){
    if (this.mostrar) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  }




  // tslint:disable-next-line:typedef
  // selCategoria(idCat: any){
  //   console.log('inicioCom: ', idCat);
  //   this.CartshopComponent.getEmpresas(idCat);
  //   this.regionVisible = 'carshop';
  // }

}
