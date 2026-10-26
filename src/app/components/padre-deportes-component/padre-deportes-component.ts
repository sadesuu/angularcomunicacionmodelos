import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes: Array<string>
  public mensaje!: string
  seleccionarFavoritoPadre(event: string) : void {
    console.log("Leyendo")
    this.mensaje = "Mi deporte favorito es: " + event
    
  }

  constructor() { 
    this.deportes  = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo", "Atletismo", "Boxeo", "Golf", "Rugby", "Voleibol"];
  }

}
