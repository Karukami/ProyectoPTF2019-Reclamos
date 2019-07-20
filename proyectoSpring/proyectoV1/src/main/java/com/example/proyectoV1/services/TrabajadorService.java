package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;

public interface TrabajadorService {	
	 Trabajador add(Trabajador t);
	 List<Trabajador>listar();
	 Trabajador edit(Trabajador p);
	 Trabajador delete(Trabajador p);
	 public Trabajador logIn(Trabajador t) throws LoginException;
	 Trabajador buscarUno(int idTrabajador);
}
