import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Router } from '@angular/router';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  constructor(private router:Router, private empresaService:EmpresaServiceService,private trabajadorServicio:TrabajadorServiceService) { }
  empresa:Empresa=new Empresa();
  trabajador:Trabajador=new Trabajador();
  pass2:string;
  tipoTrabajador:string;
  ngOnInit() {
  }

  registrar(){
    console.log("tipo usuario:"+ this.tipoTrabajador);
    this.trabajador.tipoTrabajador=this.tipoTrabajador;
    console.log("tipo usuario "+this.trabajador.tipoTrabajador);
    if(this.validarPass){
      this.trabajador.empresa=this.empresa.nombreEmpresa;
      this.empresaService.crearEmpresa(this.empresa).subscribe(params=>{
        this.empresa=params;
      });
      this.trabajadorServicio.crearTrabajador(this.trabajador).subscribe(data=>{
        this.trabajador=data;
      });
      this.router.navigate(['empresa/login']);
    }
  } 

  loginEmpresa(){
  	this.router.navigate(['empresa/login']);
  }

  homeEmpresa(){
  	this.router.navigate(['home_empresa']);
  }
  validarPass(){
    let iguales:boolean=false;
    if(this.pass2=this.trabajador.passTrabajador){
      iguales=true;
    }
    return iguales; 
  }
  RegistrarEmpresa(){
    
    this.trabajadorServicio.crearTrabajador(this.trabajador).subscribe();
    this.empresaService.crearEmpresa(this.empresa);

  }
}
