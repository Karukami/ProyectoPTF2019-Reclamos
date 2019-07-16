import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-reclamo-enviado',
  templateUrl: './reclamo-enviado.component.html',
  styleUrls: ['./reclamo-enviado.component.css']
})
export class ReclamoEnviadoComponent implements OnInit {
  idBusqueda:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  buscarPorId(){

    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //formatoParrafo():string->string[]
  //genera un areglo de string con el tamaño necesario para
  //que no se alga del pdf 
  formatoParafo(cadena:string):string[]{
    let parafo:string[]=[];
    let cantfiilas=Number(cadena.length/42)+1;
    let  CANRTCHARORFILA:number=70;
    let indice:number=CANRTCHARORFILA;
    let inicio:number=0;


    for(let i=0;i<cantfiilas;i++){
      
      parafo.push(cadena.substring(inicio,indice));
      if(inicio<cadena.length){
        inicio+=CANRTCHARORFILA;
        indice+=CANRTCHARORFILA;
      }
      else{
        inicio+=CANRTCHARORFILA;
        indice=cadena.length;
      }
    }
    return parafo;
  }
  generarPdf(){
    //informacion del reclamo o sujerencia
    let titulo=localStorage.getItem("tituloRS");
    let empresa=localStorage.getItem("empresa");
    let id=localStorage.getItem("idRS");
    let fecha=localStorage.getItem("fecha");
    let detalle=localStorage.getItem("detalleRS");
    let tipo=localStorage.getItem("tipo");
    //fecha.toDateString().replace(" ","_")// convertir objeto Date a string

    let doc = new jsPDF();
    //añadir imagen (logo superior)
    let logo=new Image();
    logo.src="../../../assets/logo.png";
    doc.addImage(logo,"png",6,6,40,40);
    //linea de separacion entre "header" y "body"
    doc.line(6, 54, 200, 54)

    doc.setFontSize(22);
    doc.text(100,30,"ID: "+id);
    doc.setFontSize(12);
    doc.text(100,40,"tipo: "+tipo);
    doc.text(10,60,"fecha: "+fecha);
    
    doc.setFontSize(16);
    doc.text(10,70,"Empresa:"+empresa);
    doc.text(10,80,"Titulo: "+titulo);
    doc.text(10, 90, "Detalle:");
    
    let parafo=this.formatoParafo(detalle);
    let posicion=100;
    for(let i=0;i<parafo.length;i++){
      doc.text(10,posicion,parafo[i]);
      posicion+=10;
    }
    
    //linea de separacion entre "body" y "footer"
    doc.line(6, 280, 200, 280)
    doc.setFontSize(12);
    doc.text(80,290,"www.g3reclamos.cl");
    //asignacion de nombre al pdf
    let nombreArchivo:string="G3_"+fecha+"_"+id+".pdf";
    //metodo para generar el pdf
    doc.save(nombreArchivo);
  }
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
}
