import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';
import { Trabajador } from '../Modelo/trabajador';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Trabajador';

  obtenerReclamosSugerencias(){
    return this.http.get<ReclamoSugerencia>(this.url);
  }
  //crearTrabajador():Trabajador ->vacio ->realiza una pericion post al servicor de back-end
  //envia atravex de metodo post el objeto Trabajador 
  //el cual sera agregado a la db desde el back
  crearTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url,trabajador);
  }

}
