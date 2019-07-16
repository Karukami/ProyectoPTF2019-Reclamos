package com.example.proyectoV1.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.repositories.ReclamoSugerenciaRepositorio;
@Service
public  class ReclamoSugerenciaServiceImp implements ReclamoSugerenciaService{
	
	@Autowired
	private ReclamoSugerenciaRepositorio repositorio;
	@Override
	public ReclamoSugerencia add(ReclamoSugerencia r) {
		return repositorio.save(r);
	}
	@Override
	public ReclamoSugerencia listarIdReclamoSugerencia(int idReclamoSugerencia) {
		return repositorio.findOne(idReclamoSugerencia);
	}
	@Override
	public ReclamoSugerencia edit(ReclamoSugerencia x) {
		return repositorio.save(x);
	}
	@Override
	public List<ReclamoSugerencia> rsByusuarioReclamoSugerencia(int usuarioReclamoSugerencia) {
		return repositorio.findByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
	}
	
}
