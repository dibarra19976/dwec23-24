// recuperar los elementos del DOM que nos interesan
const button = document.getElementsByTagName("button"); 
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



//Click sobre en envoltorio => cerrar el pop-up//Click sobre el boton para cerrar el popup
envoltorio.addEventListener("click", (e) => {
    envoltorio.style.display = "none";

});