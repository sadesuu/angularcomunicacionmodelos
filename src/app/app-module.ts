import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponents } from './components/lista-productos-components/lista-productos-components';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HijoCoche } from './components/hijo-coche/hijo-coche';
import { PadreCoche } from './components/padre-coche/padre-coche';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { DeportesComponent } from './components/deportes-component/deportes-component';
import { PadreNumeros } from './components/padre-numeros/padre-numeros';
import { NumerosComponent } from './components/numeros-component/numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponents,
    HomeComponent,
    MenuComponent,
    HijoCoche,
    PadreCoche,
    PadreDeportesComponent,
    DeportesComponent,
    PadreNumeros,
    NumerosComponent,
    ComicsSimpleComponent,
    ComicJsonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
