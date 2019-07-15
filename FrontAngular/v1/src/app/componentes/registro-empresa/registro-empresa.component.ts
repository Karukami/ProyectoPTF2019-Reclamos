import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  constructor(private router:Router, private empresaService:EmpresaServiceService) { }
  empresa:Empresa;
  trabajador:Trabajador;
  pass2:string;
  ngOnInit() {
  }

  registrar(){
    this.empresaService.crearEmpresa(this.empresa);
    this.empresaService.crearTrabajador(this.trabajador);
    this.router.navigate(['perfilEmpresa']);
  }

  loginEmpresa(){
  	this.router.navigate(['empresa/login']);
  }

  homeEmpresa(){
  	this.router.navigate(['home_empresa']);
  }

}
