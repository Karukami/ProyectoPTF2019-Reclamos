import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService,private trabajadorService:TrabajadorServiceService) { }
  trabajador:Trabajador;
  mensajeError:string;
  ngOnInit() {
  }
  //homeEmpresa():vacio->vacio
  //redirige al compoenente Home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //registrar():vacio->vacio
  //redirige a la url empresa/registro
  //que hace referencia al componente registro-empresa 
  registrar(){
    this.router.navigate(["empresa/registro"]);
  }
  logInEmpresa(){
    this.trabajadorService.logInTrabajador(this.trabajador).subscribe(data=>{
      let credenciales:Trabajador= data;
      if(credenciales.passTrabajador=="valido"){
        localStorage.setItem("Email",credenciales.nombreTrabajador);
        this.router.navigate(["perfilTrabajador"])
      }else{
        this.mensajeError="el correo o la contraseña no coinciden ";
      }
    })
  }

}
