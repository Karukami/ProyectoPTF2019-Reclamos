import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';


@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService) { }

  ngOnInit() {
  }

  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }

  registrar(){
    this.router.navigate(["empresa/registro"]);
  }

  loginEmpresa(){
  	this.router.navigate(["empresa/login"]);
  }

}
