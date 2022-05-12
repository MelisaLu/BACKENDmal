import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExplaboralComponent } from './componentes/explaboral/explaboral.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyComponent } from './componentes/proy/proy.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoAPComponent,
    AcercademiComponent,
    ExplaboralComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
