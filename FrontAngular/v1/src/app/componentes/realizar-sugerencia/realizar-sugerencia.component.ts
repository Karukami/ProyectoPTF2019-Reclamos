import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-realizar-sugerencia',
  templateUrl: './realizar-sugerencia.component.html',
  styleUrls: ['./realizar-sugerencia.component.css']
})
export class RealizarSugerenciaComponent implements OnInit {

rs:ReclamoSugerencia=new ReclamoSugerencia();
idBusqueda:number;
empresas:string[]=["aguas andinas","enel","gasco","vtr"];
empresa:string;

constructor(private router:Router, private serviceRS:RsServiceService) { }

ngOnInit() {
  this.rs.idReclamoSugerencia=0;
  let credencial=localStorage.getItem("Email");
  if(credencial=="anonimo"|| credencial==null){
    this.router.navigate(["home"]);
  }
}

realizarReclamoSugerencia() {
  this.rs.tipo="sugerencia";
  this.rs.idEmpresa=1;
  this.rs.idReclamoSugerencia=0;
  this.rs.idEmpleado=0;
  this.rs.estado="en proseso";
  this.rs.usuarioReclamoSugerencia=0;
  this.rs.respuestaRS="aun no tiene respuesra";
  
  this.rs.fechaReclamoSugerencia=new Date();

  localStorage.setItem("tituloRS",this.rs.tituloRS);
  localStorage.setItem("empresa",""+this.rs.idEmpresa);
  localStorage.setItem("idRS",""+this.rs.idReclamoSugerencia);
  localStorage.setItem("fecha",this.rs.fechaReclamoSugerencia.toString())
  localStorage.setItem("detalleRS",this.rs.detalleReclamoSugerencia);
  localStorage.setItem("tipo",this.rs.tipo);
  this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
  //alert("reclamo generado enviado con exito ");
  this.router.navigate(["rs_enviado"]);
}

buscarPorId(){
  localStorage.setItem("idBusqueda",""+this.idBusqueda);
  this.router.navigate(['buscar_id']);
  
}
cerrarSesion(){
  localStorage.setItem("Email", "anonimo");
  this.router.navigate(["home"])
}
realizarSugerencia(){
  this.router.navigate(["realizar_sugerencia"]);
}
realizarReclamo(){
  this.router.navigate(["realizar_reclamo"]);
}
}
