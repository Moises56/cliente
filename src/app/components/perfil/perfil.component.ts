import { Component, OnInit } from '@angular/core';
import {faHome,faAddressBook, faImages, faCogs} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faAddressBook =faAddressBook ;
  faImages =faImages;
  faCogs=faCogs;
  faHome=faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
