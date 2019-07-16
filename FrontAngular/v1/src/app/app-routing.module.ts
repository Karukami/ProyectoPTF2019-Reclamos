import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RealizarReclamoComponent } from './componentes/realizar-reclamo/realizar-reclamo.component';
import { ReclamoEnviadoComponent } from './componentes/reclamo-enviado/reclamo-enviado.component';
import { RealizarReclamoEmbebidaComponent } from './componentes/realizar-reclamo-embebida/realizar-reclamo-embebida.component';
import { HomeEmpresaComponent } from './componentes/home-empresa/home-empresa.component';
import { RealizarSugerenciaComponent } from './componentes/realizar-sugerencia/realizar-sugerencia.component';
import { BusquedaIdComponent } from './componentes/busqueda-id/busqueda-id.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { LoginEmpresaComponent} from './componentes/login-empresa/login-empresa.component';
import { ReclamoAnonimoComponent } from './componentes/anonimo/reclamo-anonimo/reclamo-anonimo.component';
import { SugerenciaAnonimoComponent } from './componentes/anonimo/sugerencia-anonimo/sugerencia-anonimo.component';
import { ReclamoSugerenciaEnviadoComponent } from './componentes/anonimo/reclamo-sugerencia-enviado/reclamo-sugerencia-enviado.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registrar",component:RegistroUsuarioComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"realizar_reclamo",component:RealizarReclamoComponent},
  {path:"reclamo_enviado",component:ReclamoEnviadoComponent},
  {path:"realizar_reclamo_sugerencia/:id",component:RealizarReclamoEmbebidaComponent},
  {path:"rs_enviado",component:ReclamoEnviadoComponent},
  {path:"home_empresa",component:HomeEmpresaComponent},
  {path:"realizar_sugerencia",component:RealizarSugerenciaComponent},
  {path:"buscar_id",component:BusquedaIdComponent},
  {path:"empresa/registro",component:RegistroEmpresaComponent},
  {path:"empresa/login",component:LoginEmpresaComponent},
  {path:"empresa",component:HomeEmpresaComponent},
  {path:"anonimo/realizar_reclamo",component:ReclamoAnonimoComponent},
  {path:"anonimo/realizar_sugerencia",component:SugerenciaAnonimoComponent},
  {path:"anonimo/reclamo_sugerencia_anonimo_enviado",component:ReclamoSugerenciaEnviadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
