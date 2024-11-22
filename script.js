document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Fondo");

    if (event.key ==="a"){

        elemento.className = "Fondo00";

    }

    if (event.key ==="b"){

        elemento.className = "Fondo01";

    }

    if(event.key ==="c"){

        elemento.className = "Fondo02";

    }

    if(event.key ==="d"){

        elemento.className = "Fondo03";

    }


});

/* 
Autor: Fernando Agustín Ceniceros Quiñones 
Programa: script.js 
Versión: 0.1 
Lenguaje: JavaScript 
Fecha: 21/11/2024 
Fuente: Local 
*/ 