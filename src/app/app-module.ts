import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponents } from './components/lista-productos-components/lista-productos-components';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HijoCoche } from './components/hijo-coche/hijo-coche';
import { PadreCoche } from './components/padre-coche/padre-coche';

@NgModule({
  declarations: [
    App,
    ListaProductosComponents,
    HomeComponent,
    MenuComponent,
    HijoCoche,
    PadreCoche,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
