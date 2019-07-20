package com.example.proyectoV1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.services.TrabajadorService;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Trabajador"})
@EnableAutoConfiguration
public class TrabajadorControlador {
	@Autowired
	TrabajadorService service;
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	@PostMapping
	public Trabajador agregar(@RequestBody Trabajador t) {
		System.out.println("nombre t: "+ t.getNombreTrabajador() );
		System.out.println("tipo t: "+ t.getTipoTrabajador() );
		return service.add(t);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Editar
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@RequestMapping(value = "/delete/{idTrabajador}", method = RequestMethod.GET)
	public String deleteTrabajador(@PathVariable("idTrabajador") int idTrabajador) {
		service.delete(service.buscarUno(idTrabajador));
		return "Trabajador Eliminado";
	}
	
	
	//Lista los trabajadores
	@GetMapping
	public List<Trabajador> listar(){
		return service.listar();
	} 
	
	//Permite que un trabajador pueda ingresar a la pagina 
	@PostMapping (path= {"/login"})
	public ResponseEntity<Trabajador> logIn(@RequestBody Trabajador t){
		 try {
			Trabajador trabajador = service.logIn(t);
			return ResponseEntity.status(HttpStatus.OK).body(trabajador);
		} catch (LoginException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
}
    