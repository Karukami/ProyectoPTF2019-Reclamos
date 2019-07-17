package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
public interface UsuarioService {
	List<Usuario>listar();
	Usuario listarId_RutUsuario(int rutUsuario);
	Usuario add(Usuario p);
	Usuario edit(Usuario p);
	Usuario delete(Usuario p);
	Usuario logIn(Usuario p) throws LoginException;
}
  