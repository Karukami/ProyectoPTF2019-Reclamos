package com.example.proyectoV1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyectoV1.services.SendMailService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Email"})
@EnableAutoConfiguration
@Controller
public class SendMailController {
	@Autowired
	private SendMailService sendMailService;
	
	@GetMapping("/sendMail/mail")
	 public String index() {
		return "send_mail_view";
	}
	@PostMapping("/sendMail")
	public String sendMail(@RequestParam("name") String name, @RequestParam("mail") String mail, @RequestParam("subject") String subject, @RequestParam("body")String body) {
		String message  =body + "\n\n Datos de contacto:" + "\nNombre: " + name + "\nEmail: " + mail;
		sendMailService.sendMail("zerimar287@gmail.com", "zerimar287@gmai.com", subject, message);
		return "send_mail_view";
	}
}
