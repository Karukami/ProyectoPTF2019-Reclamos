package com.example.proyectoV1.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.repositories.UsuarioRepositorio;

@Service
public class UsuarioServiceImp  implements UsuarioService{
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@Override
	public List<Usuario> listar() {
		return repositorio.findAll();	
	}

	@Override
	public Usuario listarId_RutUsuario(int id_rutUsuario) {
		return repositorio.findOne(id_rutUsuario);
	}
 
	@Override
	public Usuario add(Usuario p) {
		
		return repositorio.save(p);
	} 

	@Override
	public Usuario edit(Usuario p) {
		return repositorio.save(p);
	}

	@Override
	public Usuario delete(Usuario p) {
		// TODO Auto-generated method stub
		return null;  
	}

	@Override
	public Usuario logIn(Usuario p) throws LoginException{
		Usuario usuarioAVerificar=p;
		
			String emailusuario = p.getEmailUsuario();
			String pass = p.getPassUsuario();
			usuarioAVerificar = repositorio.findByEmailUsuarioAndPassUsuario(emailusuario, pass);
			
			
			if(usuarioAVerificar==null) {
				throw new LoginException();
			}
			
			return usuarioAVerificar;
	
	}

}
