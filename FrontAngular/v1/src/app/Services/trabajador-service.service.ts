import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Trabajador';

  obtenerReclamosSugerencias(){
    return this.http.get<ReclamoSugerencia>(this.url);
  }
  

}
