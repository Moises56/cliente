import { Component, OnInit } from '@angular/core';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AccesspointService } from 'src/app/services/accesspoint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-navcart',
  templateUrl: './navcart.component.html',
  styleUrls: ['./navcart.component.css']
})
export class NavcartComponent implements OnInit {
  closeResult = '';
  public isMenuCollapsed = true;
  faShoppingCart = faShoppingCart;

  // * Carrito
  CartShop: any = [];
  Items: any = [];
  Cant: any = [];
  encontrado = false;
  idCat!: string;

  constructor(
    public usuariosService: UsuariosService,
    private modalService: NgbModal,
    private accesspointService: AccesspointService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private categoriasService: CategoriasService

  ) { }

  ngOnInit(): void {
    // this.items = this.cartService.listCarrito();
    // console.log('Items: ', this.items);
    this.categoriasService.onIdCat.subscribe(
      data => {
        console.log(data);
        this.idCat = data;
        console.log(data);

      }
    );

    this.categoriasService.onProductos.subscribe(
      res => {
        // console.log(res._id);
        // console.log(res);
        this.addCart(res);

      }
    );

    this.accesspointService.onIdProCart.subscribe(
      res => {
        // console.log(res);
        // this.addCart(res);
        // this.cartService.addCart(res)
      }
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

      this.Items = this.cartService.listCarrito();
      // console.log('Items: ', this.Items);
    }

    // tslint:disable-next-line:typedef
    addCart(pro: any){
      console.log(pro);
      this.cartService.addCarrito(pro);
      // this.CartShop = pro;
      this.Cant = this.cartService.listCarrito();
      console.log('Cant: ', this.Cant);
    }

}
