import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {
 
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/ReclamoSugerencia'

  //crearreclamo(): ReclamoSugerencia-> <ReclamoSugerencia>
  //realiza una peticion html por medio del metodo post para enviar el objeto ReclamoSugerencia
  //al servidor de Back-end, el cual lo agrega a la db de ReclamoSugerencia
  crearReclamo(rs:ReclamoSugerencia){
  	return this.http.post<ReclamoSugerencia>(this.url,rs);
  }
  //crearreclamo(): number-> <ReclamoSugerencia>
  //realiza una peticion html por medio del metodo post para enviar un id de reclamo o sugerencia
  //al servidor de Back-end, lo busca en la base de datos y debuelve el objeto ReclamoSugerencia
  getReclamo(id:number){
    return this.http.get<ReclamoSugerencia>(this.url + "/" + id);
  }
}