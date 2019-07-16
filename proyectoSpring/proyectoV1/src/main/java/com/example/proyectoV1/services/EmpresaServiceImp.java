package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Empresa;
import com.example.proyectoV1.repositories.EmpresaRepositorio;
@Service
public class EmpresaServiceImp implements EmpresaService{

	@Autowired
	EmpresaRepositorio repositorio;
	@Override
	public Empresa add(Empresa e) {
		return repositorio.save(e);
	}

	@Override
	public List<Empresa> listarEmpresa() {
		return repositorio.findAll();
	}

}
