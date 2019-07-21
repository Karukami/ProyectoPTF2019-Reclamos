import { Component, OnInit } from '@angular/core';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-empresa-lista-sugerencias',
  templateUrl: './empresa-lista-sugerencias.component.html',
  styleUrls: ['./empresa-lista-sugerencias.component.css']
})
export class EmpresaListaSugerenciasComponent implements OnInit {

  
  sugerencias:ReclamoSugerencia[]=[];
  colores:string[]=[];
  administrador:boolean=false;
  constructor(private router:Router,private servicioRS:RsServiceService) { }

  ngOnInit() {
    let infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
    let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa"));

    if (infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    console.log("empresa listar reclmaos: "+infoEmpresa.rutEmpresa);
    let idEmpresa:number=Number(infoEmpresa.rutEmpresa);
    
    this.servicioRS.getSugerenciaEmpresa(idEmpresa).subscribe(data=>{
      this.sugerencias=data;
      console.log(this.sugerencias.length);
      console.log(this.sugerencias);
    })
  }
  responderSugerencia(sugerenciaAresolver:ReclamoSugerencia){
    localStorage.setIteml("reclamo",sugerenciaAresolver);
    this.router.navigate(["empresa/responderSugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["empresa/responderReclamo"]);
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
