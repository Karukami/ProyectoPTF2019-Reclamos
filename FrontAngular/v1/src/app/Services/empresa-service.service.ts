import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Empresa'

  //crearEmpresa:Empresa->vacio->realiza una pericion post al servicor de back-end
  //envia atravez del metodo post el objeto empresa 
  //el cual en le back-end sera agregado a la db
  crearEmpresa(empresa:Empresa){
  	return this.http.post<Empresa>(this.url,empresa);
  }
  

  

}
