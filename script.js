 function funcEncriptar() {
  var texto =  document.getElementById("insertText").value.toLowerCase();
  if (texto.length!=0) {
    textoEncriptado = auxEncriptar(texto); 

    textoSalida = document.getElementById("result");
    textoSalida.value =  textoEncriptado;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("divParaLaSalida").style.backgroundImage = "none";
    document.getElementById("divParaLaSalida").style.height = "100%";
  }else{
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    if(window.screen.width > 768){
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar2.png')";
    }else if(window.screen.width > 375){
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar3.png')";
    }else {
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar4.png')";
    }
    
  }
  
}

function funcDesencriptar() {
  var texto =  document.getElementById("insertText").value.toLowerCase();
  if (texto.length!=0) {
    textoEncriptado = auxDesencriptar(texto);

    textoSalida = document.getElementById("result");
    textoSalida.value =  textoEncriptado;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("divParaLaSalida").style.backgroundImage = "none";
    document.getElementById("divParaLaSalida").style.height = "100%";


  }else{
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    if(window.screen.width > 768){
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar2.png')";
    }else if(window.screen.width > 375){
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar3.png')";
    }else {
      document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar4.png')";
    }
  }
}


function auxEncriptar(texto){
  //en esta variable se va guardando el msj encriptado
   var msjEncriptado ="" ;

  /**El funcionamiento es el siguiente:
   * el for va haciendo que se recorra la palabra
   * con el switch me fifjo si es vocal o consonante
   *    - si es vocal agrego su ersion encripada
   *    - si es consonante se agrega normal
   * y al finalizar el msj queda encriptado
   */
  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "a":
        msjEncriptado = msjEncriptado+"ai"; 
        break;
      case "e":
        msjEncriptado = msjEncriptado+"enter"; 
        break;
      case "i":
        msjEncriptado = msjEncriptado+"imes"; 
        break;
      case "o":
        msjEncriptado = msjEncriptado+"ober"; 
        break;
      case "u":
        msjEncriptado = msjEncriptado+"ufat"; 
        break;
      default:
        msjEncriptado = msjEncriptado+texto[i]; 
    }
    
  }
  return msjEncriptado;

}

function auxDesencriptar(texto){
  //en esta variable se van agregando las letras que corresponde al msj desencriptado
  var msjDesncriptado ="" ;
  var i = 0;

  /**
   * la funcion es la siguiente: 
   * cada vez que encuentra una vocal la guarda y avanza la variable i una cantidad de espacion correspondiente
   * a la encriptacion de cada vocal
   * y las consonantes se guardan, y se avanza en uno la variable i
   */
  while( i < texto.length) {
  
    switch (texto[i]) {
      case "a":
        msjDesncriptado = msjDesncriptado+"a"; 
        i=i+2;
        break;
      case "e":
        msjDesncriptado = msjDesncriptado+"e"; 
        i=i+5;
        break;
      case "i":
        msjDesncriptado = msjDesncriptado+"i"; 
        i=i+4;
        break;
      case "o":
        msjDesncriptado = msjDesncriptado+"o"; 
        i=i+4;
        break;
      case "u":
        msjDesncriptado = msjDesncriptado+"u";
        i=i+4;
        break;
      default:
        msjDesncriptado = msjDesncriptado+texto[i];
        i=i+1;
    }
    
  }
  return msjDesncriptado;
}


/**
 * Esta funcion agrega la funcionalidad de copiado al boton copiar de la pagina
 */
function copiarTextoAlPortapapeles() {
  var texto = document.getElementById("result").value;
  navigator.clipboard.writeText(texto);
}

