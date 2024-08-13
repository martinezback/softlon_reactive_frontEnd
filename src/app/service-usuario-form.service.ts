import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioFormService {
  @Output() open : EventEmitter<any>= new EventEmitter();

  constructor() { }
}
