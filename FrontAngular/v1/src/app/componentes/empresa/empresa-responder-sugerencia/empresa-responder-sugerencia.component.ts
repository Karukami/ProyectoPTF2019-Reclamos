import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-responder-sugerencia',
  templateUrl: './empresa-responder-sugerencia.component.html',
  styleUrls: ['./empresa-responder-sugerencia.component.css']
})
export class EmpresaResponderSugerenciaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
