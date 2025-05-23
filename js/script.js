 //Textareas
    var mensajeUser= document.querySelector(".mensaje-Usuario");
    var mensajeResultado= document.querySelector(".mensaje-resultado");

    //Botones
    var botCopiar= document.querySelector(".copiar");
    var botEncriptar= document.querySelector(".boton-encript");
    var botDesencriptar= document.querySelector(".boton-desencript");
    
    //Funcion para encriptar
    function encriptar(){
        var mensaje = mensajeUser.value;
        var mensajeEcriptado = mensaje.
        replaceAll("e","enter").
        replaceAll("i","imes").
        replaceAll("o","ober").
        replaceAll("a","ai").
        replaceAll("u","ufat");
        
        mensajeResultado.value = mensajeEcriptado;
    }
    botEncriptar.onclick = encriptar;

    //Funcion desencriptar
    function desEncriptar(){
        var mensaje = mensajeUser.value;
        var mensajeDesencriptado = mensaje.
        replaceAll("enter","e").
        replaceAll("imes","i").
        replaceAll("ober","o").
        replaceAll("ai","a").
        replaceAll("ufat","u");
        
        mensajeResultado.value = mensajeDesencriptado;
    }
    botDesencriptar.onclick = desEncriptar;

    //Funcion para copiar
    function copiarText(){
        navigator.clipboard.writeText(mensajeResultado.value);
    }
    botCopiar.onclick = copiarText;