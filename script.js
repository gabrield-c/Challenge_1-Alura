//Textareas
var mensajeUser= document.querySelector(".mensaje-Usuario");
var mensajeResultado= document.querySelector(".mensaje-resultado");

//Botones
var botCopiar= document.querySelector(".copiar");
var botEncriptar= document.querySelector(".boton-encript");
var botDesencriptar= document.querySelector(".boton-desencript");
var botLimpiar = document.querySelector(".boton-limpiar"); // Added new button

//Funcion para encriptar
function encriptar(){
    var mensaje = mensajeUser.value;
    var regex = /^[a-z\s]*$/;
    if (!regex.test(mensaje)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
        mensajeResultado.value = "";
    } else {
        var mensajeEcriptado = mensaje.
        replaceAll("e","enter").
        replaceAll("i","imes").
        replaceAll("o","ober").
        replaceAll("a","ai").
        replaceAll("u","ufat");
        mensajeResultado.value = mensajeEcriptado;
    }
    botCopiar.disabled = mensajeResultado.value.trim() === '';
}
botEncriptar.onclick = encriptar;

//Funcion desencriptar
function desEncriptar(){
    var mensaje = mensajeUser.value;
    var regex = /^[a-z\s]*$/;
    if (!regex.test(mensaje)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
        mensajeResultado.value = "";
    } else {
        var mensajeDesencriptado = mensaje.
        replaceAll("enter","e").
        replaceAll("imes","i").
        replaceAll("ober","o").
        replaceAll("ai","a").
        replaceAll("ufat","u");
        mensajeResultado.value = mensajeDesencriptado;
    }
    botCopiar.disabled = mensajeResultado.value.trim() === '';
}
botDesencriptar.onclick = desEncriptar;

//Funcion para copiar
function copiarText(){
    navigator.clipboard.writeText(mensajeResultado.value)
        .then(() => {
            const originalText = botCopiar.textContent;
            botCopiar.textContent = "¡Copiado!";
            setTimeout(() => {
                botCopiar.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Error al copiar texto: ', err);
        });
}
botCopiar.onclick = copiarText;

// Funcion para limpiar campos
function limpiarCampos() {
    mensajeUser.value = "";
    mensajeResultado.value = "";
    botCopiar.disabled = true;
}
botLimpiar.onclick = limpiarCampos; // Attached function to new button

// Event listener for mensajeUser input
mensajeUser.addEventListener('input', () => {
    if (mensajeUser.value.trim() === '') {
        mensajeResultado.value = '';
        botCopiar.disabled = true;
    }
});

// Initial state for copy button
botCopiar.disabled = mensajeResultado.value.trim() === '';
