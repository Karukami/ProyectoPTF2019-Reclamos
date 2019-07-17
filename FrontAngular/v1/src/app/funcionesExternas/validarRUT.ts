
export class ValidarRut{
    
    constructor(){
      
    }
    esValido(rut) {
    // Despejar Puntos
    let valor = rut.replace('.','');
    // Despejar Gui�n
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y D�gito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut = cuerpo + '-'+ dv
    
    // Si no cumple con el m�nimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { 
        return {result: false, message:"RUT Incompleto"}; 
    }
    
    // Calcular D�gito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada d�gito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el M�ltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar M�ltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular D�gito Verificador en base al M�dulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su D�gito Verificador
    if(dvEsperado != dv) { 
        return {result: false, message:"RUT Invalido"}; 
    }
    
    // Si todo sale bien, eliminar errores (decretar que es v�lido)
    return {result: true, message:"RUT ok"}; 
}
}

