import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {
@Input() nombre: string;

  constructor() { }

  ngOnInit() {
  }

}
