package com.example.proyectoV1.repositories;
import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.ReclamoSugerencia;
public interface ReclamoSugerenciaRepositorio extends Repository<ReclamoSugerencia,Integer>{
	ReclamoSugerencia save (ReclamoSugerencia r);
	ReclamoSugerencia findOne(int idReclamoSugerencia);
	List<ReclamoSugerencia> findByusuarioReclamoSugerencia(int usuarioReclamoSugerencia);
	
}
