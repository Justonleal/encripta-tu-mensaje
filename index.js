function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafor-interno");
    let esquema = document.getElementById("esquema");

    let textoCifrado = texto
         .replace(/e/gi, "enter")
         .replace(/i/gi, "imes")
         .replace(/a/gi, "ai")
         .replace(/o/gi, "ober")
         .replace(/u/gi, "ufat");
    
    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = textoCifrado;
        esquema.src = "";
    } else {
        esquema.src = "./img/esquema.png"
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal ("Ooops!", "Recuerda que debes ingresar un texto en minusculas sin acentos", "warning");
    }
    
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafor-interno");
    let esquema = document.getElementById("esquema");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length !=0) {
        texto.value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = textoCifrado;
        esquema.src = "";
    } else {
        esquema.src = "./img/esquema.png"
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal ("Ooops!", "Recuerda que debes ingresar un texto en minusculas sin acentos", "warning");
    }

}