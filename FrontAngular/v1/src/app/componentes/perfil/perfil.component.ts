import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router, private serviceRS:RsServiceService) { }
  nombre:string = localStorage.getItem('Email');
    idBusqueda:number;

  ngOnInit() {
    if(this.nombre=="anonimo"){
      this.router.navigate(["home"]);
    }
  } 
  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }
  realizarSugerencia(){
    this.router.navigate(['realizar_sugerencia']);
  }

  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }

  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
}
