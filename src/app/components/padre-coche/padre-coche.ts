import { Component } from '@angular/core';
import Coche from '../../models/Coche';

@Component({
  selector: 'app-padre-coche',
  standalone: false,
  styleUrl: './padre-coche.css',
  templateUrl: './padre-coche.html',
})
export class PadreCoche {
  public arrayCoches: Array<Coche>;
    constructor() {
    this.arrayCoches = [
      new Coche("Pontiac", "Firebird", 0, 25),
      new Coche("Chevrolet", "Corvette", 1, 30),
      new Coche("Ford", "Mustang", 2, 35),

    ]
  }
}
