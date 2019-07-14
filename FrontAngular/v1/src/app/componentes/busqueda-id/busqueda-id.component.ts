import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';

@Component({
  selector: 'app-busqueda-id',
  templateUrl: './busqueda-id.component.html',
  styleUrls: ['./busqueda-id.component.css']
})
export class BusquedaIdComponent implements OnInit {

  constructor(private rsService:RsServiceService) { }
  rs:ReclamoSugerencia;
  ngOnInit() {
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
    });

  }

}
