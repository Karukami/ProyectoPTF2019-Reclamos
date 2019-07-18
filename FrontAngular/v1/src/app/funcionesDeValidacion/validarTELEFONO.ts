
export class ValidarTelefono{
    
    constructor(){
      
    }
	checkTelefono(telefono) {
	if (telefono.length > 9) {
		return {result: false, message:"* Telefono incompleto"};
	  }	
	  return {result: true, message:"Telefono OK"};
	}
}