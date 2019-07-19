import { Component, OnInit } from '@angular/core';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-empresa-lista-sugerencias',
  templateUrl: './empresa-lista-sugerencias.component.html',
  styleUrls: ['./empresa-lista-sugerencias.component.css']
})
export class EmpresaListaSugerenciasComponent implements OnInit {

  
  sugerencias:ReclamoSugerencia[]=[];
  colores:string[]=[];
  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router,private servicioRS:RsServiceService) { }

  ngOnInit() {
    let idEmpresa:number=124//Number(localStorage.getItem("idEmpresa"));
    this.servicioRS.getSugerenciaEmpresa(idEmpresa).subscribe(data=>{
      this.sugerencias=data;
      console.log(this.sugerencias.length);
      console.log(this.sugerencias);
    })
  }
  responderSugerencia(sugerenciaAresolver:ReclamoSugerencia){
    localStorage.setIteml("reclamo",sugerenciaAresolver);
    this.router.navigate(["empresa/responderSugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["empresa/responderReclamo"]);
  }
}
