import { Component, OnInit } from '@angular/core';
/*import {faTwitter} from '@fortawesome/free-solid-svg-icons';*/
import {faTwitter, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter =faTwitter;
  faLinkedinIn = faLinkedinIn;
  faFacebook = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
