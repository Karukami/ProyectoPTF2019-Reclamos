package com.example.proyectoV1.services;
import java.util.List;

import com.example.proyectoV1.entities.Empresa;
public interface EmpresaService {
	Empresa add(Empresa e);
	List<Empresa> listarEmpresa();
}
