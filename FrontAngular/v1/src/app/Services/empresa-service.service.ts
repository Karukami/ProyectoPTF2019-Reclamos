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
  
  //crearTrabajador():Trabajador -><trabajador> ->realiza una pericion post al servicor de back-end
  //envia atravez de metodo post el objeto Trabajador 
  //el cual sera agregado a la db desde el back-end
  crearTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url,trabajador);
  }
  //logIn(): trabajador -><Trabajador> -> realiza una peticion post al servidor de back-end
  //envia a travezdel metodo post el objeto trabajador 
  // el cual contiene las credenciales para realizar el logIn
  logIn(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url,trabajador);
  }
  listaEmpresas(){
    return this.http.get<string[]>(this.url+"/");
  }
  nombreEmpresa(id:number){
    return this.http.get<string>(this.url+"/"+id);

  }
  idEmpresa(nombre:string){
    return this.http.get(this.url+"/id/"+nombre);
  }

}
