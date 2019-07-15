import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';

import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-id',
  templateUrl: './busqueda-id.component.html',
  styleUrls: ['./busqueda-id.component.css']
})
export class BusquedaIdComponent implements OnInit {

  constructor(private rsService:RsServiceService,private router:Router) { }
  rs:ReclamoSugerencia;
  idBusqueda:number;
  mostrarPerfil:boolean=false;
  noMostrarPerfil:boolean;

  ngOnInit() {
    this.noMostrarPerfil=!this.mostrarPerfil;
    console.log(localStorage.getItem("Email"))
    if(!(localStorage.getItem("Email")=="anonimo")){
      this.mostrarPerfil=true;
    }
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
    });
  }

  //cerrarSesion():vacio ->vacio
  //cierra la secion de usuario 
  //cambia el valor de la variable Email
  //guardada en localStorage a anonimo
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  //buscarPorId():vacio -> vacio
  //guarda el valor de la variable idBusqueda
  //en localStorage y luego redirige al componente
  //de busqueda
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
    });
    
  }
}
