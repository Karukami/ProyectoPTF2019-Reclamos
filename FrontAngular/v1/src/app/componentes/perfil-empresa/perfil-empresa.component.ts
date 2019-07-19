import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  reclamosSugerencias:ReclamoSugerencia[]=[];
  administrador:boolean=true;
  colores:string[]=[];
  constructor(private servicioRS:RsServiceService) { }
  formatoDate(date:string):string{
    let nuevaFecha:string;
    
    let year=date.substr(6,10);
    let month=date.substr(3,2)
    let day=date.substr(0,2);
    return year+"-"+month+"-"+day;

  }
  ngOnInit() {
   let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa"));
   console.log(infoEmpresa);
   console.log("rut "+infoEmpresa.rutEmpresa);
    this.servicioRS.getRSEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.reclamosSugerencias=data;
      console.log(this.reclamosSugerencias);
      let hoy=new Date();
      for(let i=0;i<this.reclamosSugerencias.length;i++){
        console.log("fecha rs"+this.reclamosSugerencias[i].fechaReclamoSugerencia.toLocaleString())
        console.log("hola "+this.reclamosSugerencias[i].fechaReclamoSugerencia+" hoy es "+"");
        console.log(i);
        if(this.reclamosSugerencias[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
          this.colores[i]="white";
        }else{
          this.colores[i]="green";
        }
      }
    });

  }

}
