import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DeprecatedDatePipe } from '@angular/common';


@Component({
  selector: 'app-empresa-lista-reclamos',
  templateUrl: './empresa-lista-reclamos.component.html',
  styleUrls: ['./empresa-lista-reclamos.component.css']
})
export class EmpresaListaReclamosComponent implements OnInit {

  reclamos:ReclamoSugerencia[]=[];
  colores:string[]=[];
  
  constructor() { }

  ngOnInit() {
    for(let a =0;a<10;a++){

      let color:string;

      let rs:ReclamoSugerencia=new ReclamoSugerencia();
      rs.detalleReclamoSugerencia=""+a;
      rs.fechaReclamoSugerencia=new Date();
      rs.idEmpleado=a;
      rs.detalleReclamoSugerencia="adsfdgtrhseñfldvfkblgxdt";
      rs.tipo="Reclamo";
      let dia = rs.fechaReclamoSugerencia.getDay
      console.log("dia --"+dia);

      let esteDia=new Date();
      
      if (dia<=esteDia.getDay){

       color="rgba(255, 255, 25, 0.9)";
      }
      else{
        color="rgba(255, 255, 255, 0.9)";

      }
      console.log(color);
      this.reclamos.push(rs);
      this.colores.push(color);
    }
  }

}
