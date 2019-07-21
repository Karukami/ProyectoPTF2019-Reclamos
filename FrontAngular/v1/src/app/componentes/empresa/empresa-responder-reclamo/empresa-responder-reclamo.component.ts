import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-empresa-responder-reclamo',
  templateUrl: './empresa-responder-reclamo.component.html',
  styleUrls: ['./empresa-responder-reclamo.component.css']
})
export class EmpresaResponderReclamoComponent implements OnInit {
  rs:ReclamoSugerencia;
  constructor(private servivioRS:RsServiceService,private router:Router) { }

  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("Reclamo"));
    
  }
  enviarRespuesta(){
    
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
