import { Component, OnInit } from '@angular/core';
import {faCircle, faMedkit, faIceCream, faUtensils} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  faCircle=faCircle;
  faMedkit=faMedkit;
  faIceCream=faIceCream;
  faUtensils=faUtensils;

  constructor() { }

  ngOnInit(): void {
  }

}
