import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /* styles: [`
    h3 {
      color: dodgerblue;
    }
  `] */

})
export class AppComponent {
datos = [{nombre: 'fer'}];

  cambialo(){
    this.datos[0].nombre = 'cambia';
  }

  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
  }

oddNumb = false;
oddNumbers = [1, 3, 5];
evenNumbers = [2, 4];

}


