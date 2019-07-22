import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  constructor(private router:Router,private servicioEmrpesa:EmpresaServiceService,private servicioTrabajador:TrabajadorServiceService) { }
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  infoEmrpesa:Empresa=JSON.parse(localStorage.getItem("empresa"));
  trabajadores:Trabajador[]=[];
  administrador:boolean=false;
  ngOnInit() {
    if(this.infoTrabajador==null){
      this.router.navigate(["home"]);
    }
    if(this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.servicioTrabajador.listaTrabajadores(this.infoEmrpesa.rutEmpresa).subscribe(data=>{
      this.trabajadores=data;
    });
   

  }
  eliminarTrabajador(trabajador:Trabajador){
    this.servicioTrabajador.eliminarTrabajador(trabajador.idTrabajador).subscribe();
    location.reload();

  }
  agregarTrabajador(){
    this.router.navigate(["empresa/agregarTrabajador"]);
  }
  itTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
}
