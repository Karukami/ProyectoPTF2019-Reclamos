import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamo-sugerencia-enviado',
  templateUrl: './reclamo-sugerencia-enviado.component.html',
  styleUrls: ['./reclamo-sugerencia-enviado.component.css']
})
export class ReclamoSugerenciaEnviadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  registrarse(){
    this.router.navigate(["registrar"]);
  }
}
