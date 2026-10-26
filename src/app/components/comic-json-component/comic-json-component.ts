import { ChangeDetectorRef, Component } from '@angular/core';
import Comic from '../../models/Comic';

@Component({
  selector: 'app-comic-json-component',
  standalone: false,
  styleUrl: './comic-json-component.css',
  templateUrl: './comic-json-component.html',
})
export class ComicJsonComponent {
  public arrayComics: Array<Comic>;

  constructor(private cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void {
    let path = './assets/comics.json';

    fetch(path)
      .then((response) => response.json())
      .then((data: any[]) => {
        for (let elem of data) {
          let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
          this.arrayComics.push(comic);
        }
        this.cdr.detectChanges();
      });
  }
}
