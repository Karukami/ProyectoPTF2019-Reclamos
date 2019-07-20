import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  reclamosSugerencias:ReclamoSugerencia[]=[];
  administrador:boolean=false;
  colores:string[]=[];
  mostrarMensaje:boolean=false;
  mensaje:string="";
  idEmpresa:number;
  idBusqueda:number;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  constructor(private servicioRS:RsServiceService,private router:Router) { }
  formatoDate(date:string):string{
    let nuevaFecha:string;
    
    let year=date.substr(6,10);
    let month=date.substr(3,2)
    let day=date.substr(0,2);
    return year+"-"+month+"-"+day;

  }
  ngOnInit() {
    
    let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa"));

    console.log("asdka "+ this.infoTrabajador.tipoTrabajador);
    if (this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }

    this.servicioRS.getRSEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.reclamosSugerencias=data;
      let hoy=new Date();
      for(let i=0;i<this.reclamosSugerencias.length;i++){
        
        if(this.reclamosSugerencias[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
          this.colores[i]="white";
        }else{
          this.colores[i]="green";
        } 
      }
    });
    if (this.reclamosSugerencias.length==0){
      this.mensaje="no tienes mas reclamos ni sugerencas que revisar";
      this.mostrarMensaje=true;
    }
  }

  ordenarPorFecha(){
    this.reclamosSugerencias.sort(function(o1,o2){
      if(o1.fechaReclamoSugerencia.toLocaleString()>o2.fechaReclamoSugerencia.toLocaleString()){
        return 1;
      }else if(o1.fechaReclamoSugerencia.toLocaleString()<o2.fechaReclamoSugerencia.toLocaleString()){
        return -1;
      }
      return 0;
    });
  }
  reclamosPrimero(){
    this.reclamosSugerencias.sort(function(o1,o2){
      if(o1.tipo<o2.tipo){
        return 1;
      }else if (o1.tipo>o2.tipo){
        return -1;
      }
      return 0;
    });
    this.reclamosSugerencias.reverse();
  
  }
  responderRS(RSAresolver:ReclamoSugerencia){
    this.servicioRS.setTrabajador(this.infoTrabajador.idTrabajador,RSAresolver).subscribe(data=>{
      RSAresolver=data;
      if(RSAresolver.tipo=="Reclamo"){

        localStorage.setItem("Reclamo",JSON.stringify(RSAresolver));
        this.router.navigate(["empresa/responderReclamo"]);
      }
      else{
  
        localStorage.setItem("Sugerencia",JSON.stringify(RSAresolver));
        this.router.navigate(["empresa/responderSugerencia"]);
      }
    });
    
    
  }

  sugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  reclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
}
