package com.example.proyectoV1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.repositories.TrabajadorRepositorio;
@Service
public class TrabajadorServiceImp implements TrabajadorService{

	@Autowired
	TrabajadorRepositorio repositorio;
	
	@Override
	public Trabajador add(Trabajador t) {
		return repositorio.save(t);
	}
	@Override
	public List<Trabajador> listar() {
		return repositorio.findAll();
	}
	@Override
	public Trabajador edit(Trabajador p) {
		return repositorio.save(p);
	}
	@Override
	public Trabajador delete(Trabajador p) {
		return repositorio.delete(p);
	}
	
	@Override
	public Trabajador logIn(Trabajador t) throws LoginException{
		
		Trabajador trabajadorAVerificar = t;
		
			int idTrabajador = t.getIdTrabajador();
			String passTrabajador = t.getPassTrabajador();
			String empresa= t.getEmpresa();
			trabajadorAVerificar = repositorio.findByEmpresaAndIdTrabajadorAndPassTrabajador(empresa,idTrabajador,passTrabajador);
			
			
			if(trabajadorAVerificar==null) {
				throw new LoginException();
			}
			
			return trabajadorAVerificar;
	}
	@Override
	public Trabajador buscarUno(int idTrabajador) {
		return repositorio.findOne(idTrabajador);
	}

}
