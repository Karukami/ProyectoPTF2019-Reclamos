package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.ReclamoSugerencia;
public interface ReclamoSugerenciaService {	
	ReclamoSugerencia add(ReclamoSugerencia r);
	ReclamoSugerencia listarIdReclamoSugerencia(int idReclamoSugerencia);
	ReclamoSugerencia edit(ReclamoSugerencia x);
	List<ReclamoSugerencia> rsByusuarioReclamoSugerencia(int usuarioReclamoSugerencia);
	ReclamoSugerencia rsByIdUser(int idUser);
}
