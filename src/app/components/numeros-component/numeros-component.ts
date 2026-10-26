import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numeros-component',
  standalone: false,
  styleUrl: './numeros-component.css',
  templateUrl: './numeros-component.html',
})
export class NumerosComponent {
  @Input() numero!: number;
  @Output() sumarNumero = new EventEmitter<number>();

  sumarNumeroHijo(): void {
    this.sumarNumero.emit(this.numero);
  }
}
