import { Component, Input } from '@angular/core';
import Coche from '../../models/Coche';

@Component({
  selector: 'app-hijo-coche',
  standalone: false,
  styleUrl: './hijo-coche.css',
  templateUrl: './hijo-coche.html',
})
export class HijoCoche {

  @Input() car!: Coche

  constructor(){
    /* this.car = new Coche("Pontiac", "Firebird", 0, 25) */
  }

  acelerar():void{
    this.car.velocidad += this.car.aceleracion
  }

  frenar():void{
    this.car.velocidad -=5
  }


}
