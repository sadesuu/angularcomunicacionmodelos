import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponents } from './components/lista-productos-components/lista-productos-components';
import { PadreCoche } from './components/padre-coche/padre-coche';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"listaproductos", component:ListaProductosComponents},
  {path:"padrecoches", component:PadreCoche},
  {path:"deportes", component:PadreDeportesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
