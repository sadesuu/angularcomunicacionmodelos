import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros',
  standalone: false,
  styleUrl: './padre-numeros.css',
  templateUrl: './padre-numeros.html',
})
export class PadreNumeros {
  public numeros: Array<number> = [];
  public suma = 0;
  public ultimoNumero?: number;

  sumarNumeroPadre(numero: number): void {
    this.ultimoNumero = numero;
    this.suma += numero;
  }

  constructor() {
    for (let i = 1; i <= 5; i++) {
      const aleatorio = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(aleatorio);
    }
  }
}
