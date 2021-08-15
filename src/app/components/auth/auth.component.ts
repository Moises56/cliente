import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formRegistroUsers = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confir_password: new FormControl('', [Validators.required])
  });

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
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
        this.router.navigate(['/perfil']);
      },
      err => console.log(err)
    );
  }

}
