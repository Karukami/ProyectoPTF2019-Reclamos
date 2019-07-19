import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService,
     private serviceRS:RsServiceService,private trabajadorService:TrabajadorServiceService,
     private servicioEmpresa:EmpresaServiceService) { }

  trabajador:Trabajador=new Trabajador(); 
  mensajeError:string;
  
  ngOnInit() {
    
    this.trabajador.idTrabajador=0;
    this.trabajador.apellidoTrabajador=" ";
    this.trabajador.tipoTrabajador=" ";
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
    try {
      this.trabajadorService.logInTrabajador(this.trabajador).subscribe(data=>{
        let credenciales= data;
        if(credenciales==null){
          this.mensajeError="el correo o la contraseña no coinciden ";  
        }else{
          localStorage.setItem("Empresa",credenciales.empresa);
          localStorage.setItem("Trabajador",credenciales.nombreTrabajador);
          localStorage.setItem("trabajador",JSON.stringify(credenciales));
          let empresa:Empresa=new Empresa();
          this.servicioEmpresa.idEmpresa(credenciales.empresa).subscribe(data=>{
            empresa=data;
            console.log("el ruttt"+empresa.rutEmpresa);
            empresa.nombreEmpresa=credenciales.empresa;
            localStorage.setItem("empresa",JSON.stringify(empresa));
            localStorage.setItem("id empresa",""+empresa.rutEmpresa);
          })
          this.router.navigate(["empresa/perfil"]);
          this.mensajeError="";
        }
      })  
    } catch (error) {
      this.mensajeError="verifica que los campos sean correctos";
    }finally{
      this.mensajeError="verifica que los campos sean correctos";
    }
    
  }


  
}
