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
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
    });
    
  }
}
