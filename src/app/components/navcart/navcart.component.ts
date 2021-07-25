import { Component, OnInit } from '@angular/core';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navcart',
  templateUrl: './navcart.component.html',
  styleUrls: ['./navcart.component.css']
})
export class NavcartComponent implements OnInit {
closeResult = '';
public isMenuCollapsed = true;
faShoppingCart = faShoppingCart;

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
