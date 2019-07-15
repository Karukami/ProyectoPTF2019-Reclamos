
package com.example.proyectoV1.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.services.ReclamoSugerenciaService;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/ReclamoSugerencia"})
@EnableAutoConfiguration
public class ReclamoSugerenciaControlador { 
	@Autowired
	ReclamoSugerenciaService service;
	//Agrega un RS en la DB
	@PostMapping
	public ReclamoSugerencia agregar(@RequestBody ReclamoSugerencia r) {
		return service.add(r);
	}
	//Lista los RS por id
	@RequestMapping(value="/{idReclamo}", method=RequestMethod.GET)
	public ReclamoSugerencia listarId(@PathVariable("idReclamo")int rutusuario) {
		System.out.println("dentro de editar");
		return service.listarIdReclamoSugerencia(rutusuario);
	}
	//Permite agregar una respuesta al RS
	@PutMapping(path = {"/id"})
	public ReclamoSugerencia responderRS(@RequestBody ReclamoSugerencia x,@PathVariable("id")String respuesta) {
		x.setRespuestaRS(respuesta);
		return service.edit(x);
	}
	
		
}
