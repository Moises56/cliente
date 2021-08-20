import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AccesspointService } from './../../services/accesspoint.service';
import * as Mapboxgl from 'mapbox-gl';
import { MapcustomService } from './../../services/mapcustom.service';
import { environment } from 'src/environments/environment.prod';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-processcompra',
  templateUrl: './processcompra.component.html',
  styleUrls: ['./processcompra.component.css']
})
export class ProcesscompraComponent implements OnInit {

  formNewOrden = new FormGroup({
    direccion: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  faTrash = faTrash;

  form;
  Items: any = [];
  Cant: any = [];
  idUser: any;

  id: any;
  nombreProducto: any;
  descripcion: any;
  precio: any;
  imagenProducto: any;
  cantidad: any;
  disponible: any;

  mapa!: Mapboxgl.Map;
  lat = 14.0818;
  lng = -87.20681;
  zoom = 3;

  constructor(
    private cartService: CartService,
    private formulario: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private accesspointService: AccesspointService,
    private mapcustomService: MapcustomService
    ) {
        this.form = this.formulario.group({
          direccion: '',
          email: '',
        });
     }
    //  onSubmit(checkoutForm

  ngOnInit(): void {
    this.Items = this.cartService.listCarrito();
    console.log('Items: ', this.Items);

    (Mapboxgl as any).accessToken = environment.mapPk;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.createMArker(this.lng, this.lat);

  }

  // tslint:disable-next-line:typedef
  createMArker(lng: number, lat: number){
    const popup = new Mapboxgl.Popup().setHTML('<h3>Mi Ubicaciòn</h3><p>Esta Es mi Ubicacion </p>');


    const marker = new Mapboxgl.Marker({
      draggable: true,

    }).setLngLat([lng, lat])
    .setPopup(popup)
    .addTo(this.mapa);

    marker.on('dragend', () => {
      console.log(marker.getLngLat());
    });
  }

  // tslint:disable-next-line:typedef
  abrirOrdenModal(modal: any){
    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: false
      }
    );
    this.createMArker(this.lng, this.lat);
  }



  // tslint:disable-next-line:typedef
  saveOrden(){
    console.log( this.formNewOrden.value);
    this.idUser = localStorage.getItem('iduser');
    // tslint:disable-next-line:max-line-length
    this.Items.forEach((shop: { _id: any; nombreProducto: any; descripcion: any; precio: any; imagenProducto: any; cantidad: any; disponible: any;}) => {
      this.id = shop._id;
      this.nombreProducto = shop.nombreProducto;
      this.descripcion = shop.descripcion;
      this.precio = shop.precio;
      this.imagenProducto = shop.imagenProducto;
      this.cantidad = shop.cantidad;
      this.disponible = shop.disponible;

      const data = {
        infor: this.formNewOrden.value,
        idUser: this.idUser,
        id: this.id,
        nombreProducto: this.nombreProducto,
        descripcion: this.descripcion,
        precio: this.precio,
        imagenProducto: this.imagenProducto,
        cantidad: this.cantidad,
        disponible: this.disponible
      };
      // console.log(data.infor);
      console.log(data);
      this.cartService.saveOrden(data).subscribe(
        res => {
          console.log(res);
          alert(' Gracias Por tu Compra ****** Pronto se enviara tu pedido');
          this.modalService.dismissAll();
          this.router.navigate(['/perfil']);
        },
        err => console.log
      );
    });
  }

  // tslint:disable-next-line:typedef
  btnDeletePro(idPro: any){
    console.log('Delete Pro: ', idPro);
    this.cartService.deletePro(idPro);
  }
  // tslint:disable-next-line:typedef
  btnAdd(){
      console.log('Add');
  }
  // tslint:disable-next-line:typedef
  btnRest(){
    console.log('Rest');
  }



}

function addTo(mapa: Mapboxgl.Map) {
  throw new Error('Function not implemented.');
}

