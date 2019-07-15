package com.example.proyectoV1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.proyectoV1.entities.Trabajador;
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
	public ResponseEntity<Trabajador> logIn(Trabajador p) {
		// TODO Auto-generated method stub
		return null;
	}

}
