
const mostrar = () =>{
   document.getElementById("imgRight").style.display = "none";
   document.getElementById("text").style.display = "none";  
   document.getElementById("btnCopiar").style.display = "show";
   document.getElementById("btnCopiar").style.display = "inherit";
}


const depurartexto = () =>{
   
}



const encriptar = () =>{
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i es para que aferte tanto mayusculas como minusculas
    //g es para toda la linea 
    //m es para que afecte a multiples lineas o parrafos

    var textoCifrado = texto.replace(/e/igm, "enter");
      
      textoCifrado = textoCifrado.replace(/o/igm, "ober");
      textoCifrado = textoCifrado.replace(/i/igm, "imes");
      textoCifrado = textoCifrado.replace(/a/igm, "ai");
      textoCifrado = textoCifrado.replace(/u/igm, "ufat");

 
    document.getElementById("textArea").innerHTML = textoCifrado; 
    return mostrar();
   }



 const Desencriptar = () =>{
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i es para que aferte tanto mayusculas como minusculas
    //g es para toda la linea 
    //m es para que afecte a multiples lineas o parrafos

    var textoCifrado = texto.replace(/enter/igm, "e");
     textoCifrado = textoCifrado.replace(/ober/igm, "o");
     textoCifrado = textoCifrado.replace(/imes/igm, "i");
     textoCifrado = textoCifrado.replace(/ai/igm, "a");
     textoCifrado = textoCifrado.replace(/ufat/igm, "u");

 
    document.getElementById("textArea").innerHTML = textoCifrado; 
    return mostrar();
    
 }

 const copy = () =>{
    var contenido = document.querySelector("#textArea");
    contenido.select();
    document.execCommand("copy");
    alert("se copio correctamente")
 }

