package com.example.proyectoV1.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.services.SendMailService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Email"})
@EnableAutoConfiguration
@Controller
public class SendMailController {
	@Autowired
	private SendMailService sendMailService;;
	private ReclamoSugerenciaControlador controllRS;
	private ControladorUsuario user;
	
	@GetMapping("/sendMail/mail")
	 public String index() {
		return "send_mail_view";
	}
	
	@RequestMapping (value="/{usuarioReclamoSugerencia}", method=RequestMethod.GET)
	public String sendMail(@PathVariable ("usuarioReclamoSugerencia")int usuarioReclamoSugerencia ) {
		String nombreUsuario = user.listarRutUsuarioRS(usuarioReclamoSugerencia);
		/*int iDRS = controllRS.rsByUser(usuarioReclamoSugerencia).getIdReclamoSugerencia();
		String mailUser = user.listarRutUsuarioRS(usuarioReclamoSugerencia).getEmailUsuario();
		String message = "Estimad@ " + nombreUsuario + " : \n\n" + "Tu reclamo ha sido ingresado con exito! \n\n" 
		+ "Estate atento a la respuesta de tu reclamo con el numero de ID " + iDRS + "\n\n\nGracias por utilizar nuestra plataforma!\n\nVisitanos en www.g3.com";
		sendMailService.sendMail(mailUser,"Reclamo ID: " + iDRS , message);*/
		return nombreUsuario;
	}
}
