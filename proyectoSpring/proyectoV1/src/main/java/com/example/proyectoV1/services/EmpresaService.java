package com.example.proyectoV1.services;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Empresa;
@Service
public interface EmpresaService {
	Empresa add(Empresa e);
	
}
