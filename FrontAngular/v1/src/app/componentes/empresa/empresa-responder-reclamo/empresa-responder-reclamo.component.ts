import { Component, OnInit } from '@angular/core';
import { ReclamoSugerenciaEnviadoComponent } from '../../anonimo/reclamo-sugerencia-enviado/reclamo-sugerencia-enviado.component';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';

@Component({
  selector: 'app-empresa-responder-reclamo',
  templateUrl: './empresa-responder-reclamo.component.html',
  styleUrls: ['./empresa-responder-reclamo.component.css']
})
export class EmpresaResponderReclamoComponent implements OnInit {
  rs:ReclamoSugerencia;
  constructor(private servivioRS:ReclamoSugerenciaEnviadoComponent,private router:Router) { }

  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("reclamo"));
  }
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  verEstadisticas(){

  }
  trabajadores(){

  }
}
