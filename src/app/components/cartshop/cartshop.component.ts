import { Component, OnInit } from '@angular/core';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from '../../services/categorias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccesspointService } from './../../services/accesspoint.service';
import { CartService } from './../../services/cart.service';


@Component({
  selector: 'app-cartshop',
  templateUrl: './cartshop.component.html',
  styleUrls: ['./cartshop.component.css']
})
export class CartshopComponent implements OnInit {
  closeResult = '';
  public isMenuCollapsed = true;
  faShoppingCart = faShoppingCart;

  // *Productos
  nCat = 'No Se Que ondas';
  nombreCat: any;
  descCat: any;
  idReci: any = [];
  // tslint:disable-next-line:ban-types

  // *DEtalle Producto
  nombreProducto!: string;
  descripcionProducto!: string;
  precioProducto!: string;
  imgProductos!: string;
  idProducto!: string;
  idcatCart!: string;



  constructor(
    private modalService: NgbModal,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute,
    private accesspointService: AccesspointService,
    private cartService: CartService,

  ) { }

  Empresas: any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      console.log(params);
      console.log(params.idcat);
      this.idcatCart = params.idcat;
      this.categoriasService.onIdCat.emit(params.idcat);
      this.getEmpresas(params.idcat);
    });
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
    getEmpresas(idCat: any) {
      // console.log('CarShop: ', idCat);
      this.categoriasService.getEmpresaCategory(idCat)
      .subscribe(
        res => {
          // console.log(res);
          console.log(res.nombreCategoria);
          this.nombreCat = res.nombreCategoria;
          this.descCat = res.descripcion;
          this.Empresas = res.empresas;
          console.log(res.empresas);
        },
        err => console.log(err)
      );
    }

    // tslint:disable-next-line:typedef
    abrirDetalleProductoModal(modal: any){
      this.modalService.open(
        modal,
        {
          size: 'lg',
          centered: false
        }
      );
    }

    // tslint:disable-next-line:typedef
    getDetalleProducto(idpro: any, proDe: any){
      // console.log(idpro);
      // console.log(proDe);
      // console.log(idEmp);
      // this.router.navigate([`/cartdetalle/${idpro}`]);
      this.categoriasService.onProductos.emit(proDe);
      console.log(proDe);
      this.nombreProducto = proDe.nombreProducto;
      this.descripcionProducto = proDe.descripcion;
      this.precioProducto = proDe.precio;
      this.imgProductos = proDe.imagenProducto;
      this.idProducto = proDe._id;
      // this.categoriasService.onIdEmp.emit(idEmp);
    }


    // tslint:disable-next-line:typedef
    addCart(idProducto: any){
      // window.alert('Producto Agregado' + idProducto._id);
      console.log(idProducto);
      // this.router.navigate([`/navcart/${idProducto}`]);
      this.accesspointService.onIdProCart.emit(idProducto);

    }







}
