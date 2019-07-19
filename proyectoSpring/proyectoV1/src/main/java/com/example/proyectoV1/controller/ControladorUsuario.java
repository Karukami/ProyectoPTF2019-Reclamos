package com.example.proyectoV1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.services.UsuarioService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Usuario"})
@EnableAutoConfiguration
public class ControladorUsuario {	
	@Autowired
	UsuarioService service;
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	@PostMapping
	public Usuario agregar(@RequestBody Usuario p) {
		return service.add(p);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Editar 
	@PutMapping(path= {"/{rutUsuario}"})
	public Usuario editar(@RequestBody Usuario p,@PathVariable("rutUsuario") int rutusuario){
	p.setRutUsuario(rutusuario);
	return service.edit(p);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@DeleteMapping
	public void eliminar(Usuario x) {
		service.delete(x);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de Todos los Usuarios
	@RequestMapping(value="/all", method = RequestMethod.GET)
	public List<Usuario>Listar(){
	return service.listar(); 
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Buscar Usuario por Rut
	@RequestMapping(value="/{rutUsuario}", method=RequestMethod.GET)
	public Usuario buscarRutUsuario(@PathVariable("rutUsuario")int rutusuario) {
		return service.listarId_RutUsuario(rutusuario);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn Usuario
	@PostMapping (path= {"/login"})
	public ResponseEntity<Usuario> logIn(@RequestBody Usuario p){
		 try {
			Usuario us = service.logIn(p);
			return ResponseEntity.status(HttpStatus.OK).body(us);
		} catch (LoginException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
}
