import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamo-enviado',
  templateUrl: './reclamo-enviado.component.html',
  styleUrls: ['./reclamo-enviado.component.css']
})
export class ReclamoEnviadoComponent implements OnInit {
  idBusqueda:number;
  constructor(private router:Router) { }

  ngOnInit() {
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
