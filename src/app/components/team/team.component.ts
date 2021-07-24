import { Component, OnInit } from '@angular/core';
import {faTwitter, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  faTwitter =faTwitter;
  faLinkedinIn = faLinkedinIn;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
