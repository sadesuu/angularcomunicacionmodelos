import { Component } from '@angular/core';
import { Producto } from '../../models/Producto';
@Component({
  selector: 'app-lista-productos-components',
  standalone: false,
  styleUrl: './lista-productos-components.css',
  templateUrl: './lista-productos-components.html',
})
export class ListaProductosComponents {
  public productos: Producto;
  public listaProductos: Array<Producto>;
  constructor() {
    this.productos = new Producto(
      'Hugo',
      'https://imgs.search.brave.com/AKV7jPMVk7mk6zS4YWcuX17fUfNJX6CznA22hv-yYtI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxsLWFib3V0LXBo/b3RvLmNvbS9pbWFn/ZXMvcGhvdG9ncmFw/aGVyL0gvUEhPVC1w/aWV0ZXItaHVnby0x/LmpwZw',
      22,
    );

    this.listaProductos = new Array<Producto>();

    this.listaProductos = [
      new Producto(
        'Nike Air Mag',
        'https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg',
        1900,
      ),
      new Producto(
        'New Balance 998',
        'https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg',
        140,
      ),
      new Producto(
        'https://jhayber.com/documents/images/products/63638-850-1.jpg',
        'J-Hayber Olimpo',
        60,
      ),
      new Producto(
        'Cangrejeras',
        'https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp',
        10,
      ),
    ];
  }
}
