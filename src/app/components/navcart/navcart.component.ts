import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcart',
  templateUrl: './navcart.component.html',
  styleUrls: ['./navcart.component.css']
})
export class NavcartComponent implements OnInit {


  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

}
