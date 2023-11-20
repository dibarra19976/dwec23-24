// recuperar los elementos del DOM que nos interesan
const button = document.querySelector("button"); 
const envoltorio = document.querySelector(".envoltorio-popup"); 
const cerrar = document.querySelector('.cerrar-popup');

//Eventos
//Click sobre el boton para mostrar el popup
button.addEventListener("click", () => {
    envoltorio.style.display = "block";
});

//Click sobre el boton para cerrar el popup
cerrar.addEventListener("click", () => {
    envoltorio.style.display = "none";

});



// //Click sobre en envoltorio => cerrar el pop-up//Click sobre el boton para cerrar el popup
// envoltorio.addEventListener("click", (e) => {
//     envoltorio.style.display = "none";

// });

const questions = [
    {
        "pregunta" : "¿Que pais tiene mas poblacion?",
        "respuestaCorrecta" : "China",
        "respuestaIncorrecta" : "Estados Unidos"
    },
    {
        "pregunta" : "El primer astronauta que aterrizo en la luna fue...",
        "respuestaCorrecta" : "Neil Amstrong",
        "respuestaIncorrecta" : "Louis Amstrong"
    },
    {
        "pregunta" : "¿Como se llama la ultima consola de la compañia SEGA?",
        "respuestaCorrecta" : "Dreamcast",
        "respuestaIncorrecta" : "Saturn"
    },
    {
        "pregunta" : "¿Cual es el primer juego de la saga 'Persona'?",
        "respuestaCorrecta" : "Reveletions Persona",
        "respuestaIncorrecta" : "Persona 3"
    },
    {
        "pregunta" : "Xavier Foster le metio a ___ el solito",
        "respuestaCorrecta" : "Hector Helio",
        "respuestaIncorrecta" : "Dave Quagmire"
    }
    
]

let indicePreguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const preguntaPropuesta = document.getElementById("preguntaPropuesta");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecho = document.getElementById("btnDerecho");
const mensaje = document.getElementById("mensaje");
const btnReiniciar = document.getElementById("btnReiniciar");

function mezclaRespuestas(correcta, incorrecta){
    const respuestas = [correcta, incorrecta];
    respuestas.sort(() => Math.random() - 0.5);
    return respuestas;
}

function mostrarPregunta(){
    if(indicePreguntaActual < questions.length){
        const preguntaActual = questions[indicePreguntaActual];
        preguntaPropuesta.textContent = preguntaActual.pregunta;
    
        const [mezcladoCorrecto, mezcladoIncorrecto] = mezclaRespuestas(preguntaActual.respuestaCorrecta, preguntaActual.respuestaIncorrecta);

        btnIzquierda.textContent = mezcladoCorrecto;
        btnDerecho.textContent = mezcladoIncorrecto;

    }else{

        if(respuestasCorrectas == questions.length){
            mensaje.textContent = "Has ganado! Has respondido correctamente a todas las respuestas";
        }
        else{
            mensaje.textContent = `Juego acabado. Respuestas correctas: ${ respuestasCorrectas } Respuestas incorrectas: ${ respuestasIncorrectas }`;
        }

        btnIzquierda.style.display = "none";
        btnDerecho.style.display = "none";
        btnReiniciar.style.display = "inline-block";
        preguntaPropuesta.textContent = "";
    }

}


function comprobarRespuesta(respuestaSeleccionada){
    const preguntaActual =  questions[indicePreguntaActual];
    
    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta){
        respuestasCorrectas++;
    }
    else{
        respuestasIncorrectas++;
    }

    indicePreguntaActual++;
    mostrarPregunta();
}


btnIzquierda.addEventListener("click", () => {comprobarRespuesta(btnIzquierda.textContent)});   
btnDerecho.addEventListener("click", () => {comprobarRespuesta(btnDerecho.textContent)});   
btnReiniciar.addEventListener("click", () => {
    indicePreguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mensaje.textContent = "";
    btnIzquierda.style.display = "inline-block";
    btnDerecho.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostrarPregunta();
}); 

mostrarPregunta();
btnReiniciar.style.display = "none";
