import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InyectableService {

  constructor() { }


  funcionInyectada(){
    return 44;
  }
}

