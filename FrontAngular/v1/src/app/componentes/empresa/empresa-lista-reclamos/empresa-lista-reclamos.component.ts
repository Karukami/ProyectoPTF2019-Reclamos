import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';



@Component({
  selector: 'app-empresa-lista-reclamos',
  templateUrl: './empresa-lista-reclamos.component.html',
  styleUrls: ['./empresa-lista-reclamos.component.css']
})
export class EmpresaListaReclamosComponent implements OnInit {

  reclamos:ReclamoSugerencia[]=[];
  colores:string[]=[];
  
  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router,private servicioRS:RsServiceService) { }
  formatoDate(date:string):string{
    let nuevaFecha:string;
    
    let year=date.substr(6,10);
    let month=date.substr(3,2)
    let day=date.substr(0,2);
    return year+"-"+month+"-"+day;

  }
  ngOnInit() {
    let idEmpresa:number=123//Number(localStorage.getItem("idEmpresa"));
    this.servicioRS.getReclamoEmpresa(idEmpresa).subscribe(data=>{
      this.reclamos=data;
      console.log(this.reclamos.length);
      console.log(this.reclamos);
      let hoy=new Date();
      for(let i=0;i<this.reclamos.length;i++){
        console.log("fecha rs"+this.reclamos[i].fechaReclamoSugerencia.toLocaleString())
        console.log("hola "+this.reclamos[i].fechaReclamoSugerencia+" hoy es "+"");
        if(this.reclamos[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
          console.log(i);
          this.colores[i]="white";
        }else{
          this.colores[i]="green";
        }
      }
    })
    
  }
  responderReclamo(reclamoAresolver:ReclamoSugerencia){
    
    localStorage.setItem("reclamo",JSON.stringify(reclamoAresolver));
    this.router.navigate(["empresa/responderReclamo"]);
  }
  realizarSugerencia(){
    this.router.navigate(["empresa/responderSugerencia"]);
  }
}
