import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
closeResult = '';
public isMenuCollapsed = true;

  faBars = faBars;
  constructor(
    public usuariosService: UsuariosService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
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

}
