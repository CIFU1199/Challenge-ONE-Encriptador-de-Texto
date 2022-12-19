const encriptar = () =>{
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i es para que aferte tanto mayusculas como minusculas
    //g es para toda la linea 
    //m es para que afecte a multiples lineas o parrafos

    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

 

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text").style.display = "none";  
    document.getElementById("textArea").innerHTML = textoCifrado; 
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
 }

 const Desencriptar = () =>{
    var texto = document.getElementById("inputText").value.toLowerCase();
    //i es para que aferte tanto mayusculas como minusculas
    //g es para toda la linea 
    //m es para que afecte a multiples lineas o parrafos

    var textoCifrado = texto.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgRight").style.display = "none";
    document.getElementById("text").style.display = "none";  
    document.getElementById("textArea").innerHTML = textoCifrado; 
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
 }

 const copy = () =>{
    var contenido = document.querySelector("#textArea");
    contenido.select();
    document.execCommand("copy");
    alert("se copio ")
 }

