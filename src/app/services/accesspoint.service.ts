import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesspointService {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMensajeSuccess: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onIdProCart: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onIdUSer: EventEmitter<any> = new EventEmitter();


  constructor() { }
}
