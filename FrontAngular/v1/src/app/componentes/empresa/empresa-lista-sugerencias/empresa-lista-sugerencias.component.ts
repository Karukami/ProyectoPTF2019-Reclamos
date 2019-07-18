import { Component, OnInit } from '@angular/core';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';

@Component({
  selector: 'app-empresa-lista-sugerencias',
  templateUrl: './empresa-lista-sugerencias.component.html',
  styleUrls: ['./empresa-lista-sugerencias.component.css']
})
export class EmpresaListaSugerenciasComponent implements OnInit {

  
  sugerencias:ReclamoSugerencia[]=[];
  colores:string[]=[];
  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router) { }

  ngOnInit() {
    let idEmpresa:number=Number(localStorage.getItem("idEmpresa"));
    this.servicioTrabajador.getReclamoEmpresa(idEmpresa).subscribe(data=>{
      this.sugerencias=data;
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
