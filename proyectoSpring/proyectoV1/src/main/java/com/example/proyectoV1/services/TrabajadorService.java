package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Trabajador;
@Service
public interface TrabajadorService {	
	 Trabajador add(Trabajador t);
	 List<Trabajador>listar();
	 Trabajador edit(Trabajador p);
	 Trabajador delete(Trabajador p);
	 ResponseEntity<Trabajador> logIn(Trabajador p);
}
