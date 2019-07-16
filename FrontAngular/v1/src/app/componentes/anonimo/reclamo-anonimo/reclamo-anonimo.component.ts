import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';

@Component({
  selector: 'app-reclamo-anonimo',
  templateUrl: './reclamo-anonimo.component.html',
  styleUrls: ['./reclamo-anonimo.component.css']
})
export class ReclamoAnonimoComponent implements OnInit {

	rs:ReclamoSugerencia=new ReclamoSugerencia();
  idBusqueda:number;
  empresas:string[]=["aguas andinas","enel","gasco","vtr"];
  empresa:string;
  cantidadMaxima:number=265;
  cantidadCarcteres:number=0;

  constructor(private router:Router, private serviceRS:RsServiceService,private servicioEmpresa:EmpresaServiceService) { }
  
  ngOnInit() {
    this.rs.idReclamoSugerencia=0;
    this.rs.detalleReclamoSugerencia=" ";
    this.servicioEmpresa.listaEmpresas().subscribe(data=>{
      this.empresas=data;
    
    });
    }
  
  realizarReclamoSugerencia() {
    this.rs.tipo="Reclamo";
    this.rs.idEmpresa=1;
    this.rs.idReclamoSugerencia=0;
    this.rs.idEmpleado=0;
    this.rs.estado="en proseso";
    this.rs.usuarioReclamoSugerencia=Number(localStorage.getItem('anonimo'));
    this.rs.respuestaRS="aun no hay respuesta";
    this.rs.fechaReclamoSugerencia=new Date();
    localStorage.setItem("tituloRS",this.rs.tituloRS);
    localStorage.setItem("empresa",""+this.rs.idEmpresa);
    localStorage.setItem("idRS",""+this.rs.idReclamoSugerencia);
    localStorage.setItem("fecha",this.rs.fechaReclamoSugerencia.toString())
    localStorage.setItem("detalleRS",this.rs.detalleReclamoSugerencia);
    localStorage.setItem("tipo",this.rs.tipo);

    this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});

    this.router.navigate(["anonimo/reclamo_sugerencia_anonimo_enviado"]);
  }

  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
 
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }

}
