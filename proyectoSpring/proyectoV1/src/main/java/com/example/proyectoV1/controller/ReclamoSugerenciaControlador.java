package com.example.proyectoV1.controller;
import java.util.ArrayList;
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
	@RequestMapping(value = "/id/{usuarioReclamoSugerencia}",method = RequestMethod.GET)
	public ReclamoSugerencia rsByUser (@PathVariable("usuarioReclamoSugerencia")int usuarioReclamoSugerencia) {
		ArrayList<ReclamoSugerencia> rsUser = (ArrayList<ReclamoSugerencia>) service.rsByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
		ReclamoSugerencia xd = new ReclamoSugerencia();
		xd.setIdReclamoSugerencia(rsUser.get(rsUser.size()-1).getIdReclamoSugerencia());
		return xd;
		
	}
	@RequestMapping(value = "/id/last", method = RequestMethod.GET)
	public ReclamoSugerencia lastRS() {
		ArrayList<ReclamoSugerencia> ReclamosS = (ArrayList<ReclamoSugerencia>) service.listarTodo();
		ReclamoSugerencia lastidrs = new ReclamoSugerencia();
		lastidrs.setIdReclamoSugerencia(ReclamosS.get(ReclamosS.size()-1).getIdReclamoSugerencia());
		return lastidrs;
	}
	@RequestMapping(value="/listar/rs/{idEmpresa}" , method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> rsByIdEmpresas(@PathVariable("idEmpresa") int idEmpresa){
		ArrayList<ReclamoSugerencia> listaRSByidEmpresa = (ArrayList<ReclamoSugerencia>) service.listarByidEmpresa(idEmpresa);
		return listaRSByidEmpresa;
	}
	@RequestMapping(value = "/listar/s/{idEmpresa}",method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> sugerenciaByIdEmpresa(@PathVariable ("idEmpresa") int idEmpresa){
		String tipo = "sugerencia";
		ArrayList<ReclamoSugerencia> sByEmpresa = (ArrayList<ReclamoSugerencia>) service.sugerenciaByIdEmpresas(idEmpresa, tipo);
		return sByEmpresa;
	}
}























