 function funcEncriptar() {
  var texto =  document.getElementById("insertText").value;
  if (texto.length!=0) {
    textoEncriptado = auxEncriptar(texto); 

    textoSalida = document.getElementById("result");
    textoSalida.value =  textoEncriptado;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("divParaLaSalida").style.backgroundImage = "none";
  }else{
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar2.png')";
  }
  
}

function funcDesencriptar() {
  var texto =  document.getElementById("insertText").value;
  if (texto.length!=0) {
    textoEncriptado = auxDesencriptar(texto);

    textoSalida = document.getElementById("result");
    textoSalida.value =  textoEncriptado;
    document.getElementById("copy").style.visibility = "visible";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("divParaLaSalida").style.backgroundImage = "none";
  }else{
    document.getElementById("copy").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("divParaLaSalida").style.backgroundImage = "url('image/imagenPreEncriptar2.png')";
  }
}


function auxEncriptar(texto){
  //voy a cerar una variable en la cual voy a ir agregando las letras encriptadas o no segun lo necesite
   var msjEncriptado ="" ;

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
  //voy a cerar una variable en la cual voy a ir agregando las letras encriptadas o no segun lo necesite
  var msjEncriptado ="" ;
  var i = 0;
  while( i < texto.length) {
  
    switch (texto[i]) {
      case "a":
        msjEncriptado = msjEncriptado+"a"; 
        i=i+2;
        break;
      case "e":
        msjEncriptado = msjEncriptado+"e"; 
        i=i+5;
        break;
      case "i":
        msjEncriptado = msjEncriptado+"i"; 
        i=i+4;
        break;
      case "o":
        msjEncriptado = msjEncriptado+"o"; 
        i=i+4;
        break;
      case "u":
        msjEncriptado = msjEncriptado+"u";
        i=i+4;
        break;
      default:
        msjEncriptado = msjEncriptado+texto[i];
        i=i+1;
    }
    
  }
  return msjEncriptado;
}

function copiarTextoAlPortapapeles() {
  var texto = document.getElementById("result").value;
  navigator.clipboard.writeText(texto);
}
