import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-cartdetalle',
  templateUrl: './cartdetalle.component.html',
  styleUrls: ['./cartdetalle.component.css']
})
export class CartdetalleComponent implements OnInit {

  nombrePro: any;
  descPro: any;
  precioPro: any;
  idCat!: string;
  idEmpr!: string;


  constructor(
    private modalService: NgbModal,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.categoriasService.onProductos.subscribe(
      res => {
        // console.log(res);
        this.getProductos(res);
        // console.log(res.nombreProducto);
        // this.nombrePro = res.nombreProducto;
      }
    );

    /// * IDEMPR
    // this.categoriasService.onIdEmp.subscribe(
    //   res => {
    //     console.log(res);
    //     this.idEmpr = res;
    //   }
    // );


    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      console.log('idPro', params.idpro);
      // this.getProductos(params.idpro);

    });
  }


  // tslint:disable-next-line:typedef
  getProductos(pro: any){
    // console.log(prod);
    console.log(pro);
    this.nombrePro = pro.nombreProducto;
  }

}


// this.categoriasService.onProductos
// .subscribe(
//   res => {
//     console.log(res);
//     this.nombrePro = res.nombreProducto;
//   }
// );
