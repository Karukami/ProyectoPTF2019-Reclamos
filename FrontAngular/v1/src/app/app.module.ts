import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Services/service.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RealizarReclamoComponent } from './componentes/realizar-reclamo/realizar-reclamo.component';
import { ReclamoEnviadoComponent } from './componentes/reclamo-enviado/reclamo-enviado.component';
import { HomeEmpresaComponent } from './componentes/home-empresa/home-empresa.component';
import { RealizarReclamoEmbebidaComponent } from './componentes/realizar-reclamo-embebida/realizar-reclamo-embebida.component';
import { RealizarSugerenciaComponent } from './componentes/realizar-sugerencia/realizar-sugerencia.component';
import { BusquedaIdComponent } from './componentes/busqueda-id/busqueda-id.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { PerfilEmpresaComponent } from './componentes/perfil-empresa/perfil-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    PerfilComponent,
    RealizarReclamoComponent,
    ReclamoEnviadoComponent,
    HomeEmpresaComponent,
    RealizarReclamoEmbebidaComponent,
    RealizarSugerenciaComponent,
    BusquedaIdComponent,
    RegistroEmpresaComponent,
    LoginEmpresaComponent,
    PerfilEmpresaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
