import { Component, OnInit } from '@angular/core';
import {faHome, faAddressBook, faImages, faCogs} from '@fortawesome/free-solid-svg-icons';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccesspointService } from 'src/app/services/accesspoint.service';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faAddressBook = faAddressBook ;
  faImages = faImages;
  faCogs = faCogs;
  faHome = faHome;

  Orden: any = [];
  idUser: any;

  constructor(
    private configAlert: NgbAlertConfig,
    private accesspointService: AccesspointService,
    public usuariosService: UsuariosService

    ) {
      configAlert.type = 'success';
      configAlert.dismissible = true;
    }

    // tslint:disable-next-line:typedef
    cerrar(alert: any){
      // document.getElementById(alert).style.display = 'none';
    }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('iduser');
    this.usuariosService.getOrdenCliente( this.idUser)
    .subscribe(
      res => {
        console.log(res);
        this.Orden = res;
      }, 
      err => console.log('error ****', err)
    );


    this.accesspointService.onMensajeSuccess
    .subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
