package com.example.proyectoV1.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.repositories.TrabajadorRepositorio;
@Service
public interface TrabajadorService {

	@Autowired
	TrabajadorRepositorio repositorio;
	
	 default Trabajador add(Trabajador t) {
		return repositorio.save(t);
	}
	
}
