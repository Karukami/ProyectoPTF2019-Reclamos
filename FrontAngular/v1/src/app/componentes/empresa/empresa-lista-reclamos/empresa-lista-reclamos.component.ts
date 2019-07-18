import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-empresa-lista-reclamos',
  templateUrl: './empresa-lista-reclamos.component.html',
  styleUrls: ['./empresa-lista-reclamos.component.css']
})
export class EmpresaListaReclamosComponent implements OnInit {

  reclamos:ReclamoSugerencia[]=[];
  colores:string[]=[];
  
  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router) { }

  ngOnInit() {
    let idEmpresa:number=Number(localStorage.getItem("idEmpresa"));
    this.servicioTrabajador.getReclamoEmpresa(idEmpresa).subscribe(data=>{
      this.reclamos=data;
    })
    // for(let a =0;a<10;a++){

    //   let color:string;

    //   let rs:ReclamoSugerencia=new ReclamoSugerencia();
    //   rs.detalleReclamoSugerencia=""+a;
    //   rs.fechaReclamoSugerencia=new Date();
    //   rs.idEmpleado=a;
    //   rs.detalleReclamoSugerencia="adsfdgtrhseñfldvfkblgxdt";
    //   rs.tipo="Reclamo";
    //   let dia = rs.fechaReclamoSugerencia.getDay
    //   console.log("dia --"+dia);

    //   let esteDia=new Date();
      
    //   if (dia<=esteDia.getDay){

    //    color="rgba(255, 255, 25, 0.9)";
    //   }
    //   else{
    //     color="rgba(255, 255, 255, 0.9)";

    //   }
    //   console.log(color);
    //   this.reclamos.push(rs);
    //   this.colores.push(color);
    // }
  }
  responderReclamo(reclamoAresolver:ReclamoSugerencia){
    localStorage.setIteml("reclamo",reclamoAresolver);
    this.router.navigate(["empresa/responderReclamo"]);
  }

}
