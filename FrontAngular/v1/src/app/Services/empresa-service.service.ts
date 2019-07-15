import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { Trabajador } from '../Modelo/trabajador';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Empresa'

  //crearEmpresa:Empresa->vacio->realiza una pericion post al servicor de back-end
  //envia atravez del metodo post el objeto empresa 
  //el cual  sera agregado a la db desde el back
  crearEmpresa(empresa:Empresa){
  	return this.http.post<Empresa>(this.url,empresa);
  }
  
  //crearTrabajador():Trabajador ->vacio ->realiza una pericion post al servicor de back-end
  //envia atravex de metodo post el objeto Trabajador 
  //el cual sera agregado a la db desde el back
  crearTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url,trabajador);
  }

}
