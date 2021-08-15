import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEmpresas = new EventEmitter();

  Categorias: any = [];

  constructor(
    private categoriasService: CategoriasService,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.categoriasService.getCategorias()
    .subscribe(
      res => {
        this.Categorias = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  // tslint:disable-next-line:typedef
  getCategoria(){
    this.categoriasService.getCategorias()
    .subscribe(
      res => {
        console.log(res);
        this.Categorias = res;
      },
      err => console.log(err)
    );
  }


  // *Enviado id A AppComponets
  // tslint:disable-next-line:typedef
  getEmpresas(idCat: any){
    console.log('idCat: CompoCat: ', idCat);
    // this.onEmpresas.emit(idCat);
    this.categoriasService.onEmpresas.emit(idCat);
    this.router.navigate([`/cartshop/${idCat}`]);
    // this.router.navigateByUrl('/cartshop');
  }




}
