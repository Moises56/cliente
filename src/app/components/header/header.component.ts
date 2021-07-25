import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private modalService: NgbModal
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

}
