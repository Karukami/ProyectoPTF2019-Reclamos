import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';



@Component({
  selector: 'app-empresa-lista-reclamos',
  templateUrl: './empresa-lista-reclamos.component.html',
  styleUrls: ['./empresa-lista-reclamos.component.css']
})
export class EmpresaListaReclamosComponent implements OnInit {

  reclamos:ReclamoSugerencia[]=[];
  colores:string[]=[];
  administrador:boolean=false;
  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router,private servicioRS:RsServiceService) { }
  formatoDate(date:string):string{
    let nuevaFecha:string;
    
    let year=date.substr(6,10);
    let month=date.substr(3,2)
    let day=date.substr(0,2);
    return year+"-"+month+"-"+day;

  }
  ngOnInit() {
    let infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
    let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa"));

    if (infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.servicioRS.getReclamoEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.reclamos=data;
 
      let hoy=new Date();
      for(let i=0;i<this.reclamos.length;i++){
     
        if(this.reclamos[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
         
          this.colores[i]="white";
        }else{
          this.colores[i]="green";
        }
      }
    })
    
  }
  
  responderReclamo(RSAresolver:ReclamoSugerencia){
    console.log(RSAresolver)
    localStorage.setItem("reclamo",JSON.stringify(RSAresolver));
    this.router.navigate(["empresa/responderReclamo"]);
  }
  realizarSugerencia(){
    
    this.router.navigate(["empresa/listaSugerencias"]);
  }
}
