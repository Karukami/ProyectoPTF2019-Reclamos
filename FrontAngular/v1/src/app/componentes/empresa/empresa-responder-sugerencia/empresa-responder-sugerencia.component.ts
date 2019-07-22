import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-empresa-responder-sugerencia',
  templateUrl: './empresa-responder-sugerencia.component.html',
  styleUrls: ['./empresa-responder-sugerencia.component.css']
})
export class EmpresaResponderSugerenciaComponent implements OnInit {

  constructor(private router:Router) { }
  rs:ReclamoSugerencia;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("Sugerencia"));
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
    this.router.navigate(["empresa/estadisticas"]);
  }
  trabajadores(){

  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
}
