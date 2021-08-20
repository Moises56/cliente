import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios.service';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccesspointService } from './../../services/accesspoint.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formLoginUsers = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  formRegistroUsers = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confir_password: new FormControl('', [Validators.required])
  });

  token = '';

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private configAlert: NgbAlertConfig,
    private accesspointService: AccesspointService
    ) {
      configAlert.dismissible = true;
     }

    // tslint:disable-next-line:typedef
    cerrar(alert: any){
      // document.getElementById(alert).style.display="none";
    }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:typedef
    login(){
      // console.log(this.formLoginUsers.value);
      const data = {
        users: this.formLoginUsers.value
      };
      console.log(data);
      this.usuariosService.signin(data)
      .subscribe(
        res => {
          console.log(res.idUser);
          localStorage.setItem('iduser', res.idUser ); // * Guardando token en localStorage
          // this.accesspointService.onIdUSer.emit(res.idUser);
          console.log(res);
          this.token = res.token;
          localStorage.setItem('token', res.token ); // * Guardando token en localStorage
          this.router.navigate(['/perfil']);
        },
        err => console.log(err)
        );
    }

  // tslint:disable-next-line:typedef
  signup(){
    console.log(this.formRegistroUsers.value);
    const data = {
      user: this.formRegistroUsers.value
    };
    console.log(data);
    this.usuariosService.signup(data)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/perfil']);
        this.accesspointService.onMensajeSuccess.emit(res);
      },
      err => console.log(err)
      );
  }


}
