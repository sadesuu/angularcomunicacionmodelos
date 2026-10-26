import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponents } from './components/lista-productos-components/lista-productos-components';
import { PadreCoche } from './components/padre-coche/padre-coche';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeros } from './components/padre-numeros/padre-numeros';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"listaproductos", component:ListaProductosComponents},
  {path:"padrecoches", component:PadreCoche},
  {path:"deportes", component:PadreDeportesComponent},
  {path:"numeros", component:PadreNumeros},
  {path:"comics" , component:ComicsSimpleComponent},
  {path:"comicsjson", component: ComicJsonComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
