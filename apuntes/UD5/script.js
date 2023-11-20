//!querySeLector
//parametro: un selector CSS

// const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('div.error');
// const para = document.querySelector('body > h1');
// const para = document.querySelector('body > h1:nth-child(2)');
// const para = document.querySelector('body > div:nth-child(3) > p:nth-child(2)');
// console.log(para);

//!querySelectorALL
//parametro: selector CSS
// const paras = document.querySelectorAll('p');
// console.log(paras);
// // console.log(paras[0]);
// paras.forEach(para => {
//     console.log(para);
// });

// !getElementById
// parametro: nombre del identificador

// const titulo = document.getElementById('titulo');
// console.log(titulo);

// !getElementsByClassName
// parametro: nombre de la clase asociada a ese elemento.
// const errors = document.getElementsByClassName('error');
// console.log(error);
// console.log(error[0]);

// !getElementsByTagName
// parametro: nombre del elemento.
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// !Modificar el contenido de la pagina
// innerHTML
// // let para = document.querySelector('p');
// let paras = document.querySelectorAll('p');
// // let contenidoP1 = paras[0].innerText
// let p1 = paras[0];
// // let contenido = para.innerHTML;
// // let contenido = para.innerText;
// let contenidoP1 = p1.innerText;
// console.log(contenidoP1);
// p1.innerHTML = "Requete";
// console.log(contenidoP1);

// !Obtener y establecer atributos
// let enlace = document.querySelectorAll('a');
// let url

// !Añadir y eliminar estilos
// style
// let error = document.querySelector('body > div.error');
// error.style.backgroundColor = "blue";
// error.style.backgroundColor = "";

// !Añadir y eliminar clases
// let error = document.querySelector('body > div.error');
// // console.log(error.classList);
// error.classList.add("paco");
// error.classList.remove("error");

// let paras = document.getElementsByTagName('p');
// let hijo = paras[2];
// console.log(hijo);
// let padre = hijo.parentNode;
// console.log(padre);
// let primerHermano = padre.firstElementChild;
// console.log(primerHermano);
// let sigienteHermano = padre.nextElementSibiling;
// console.log(sigienteHermano);


// EVENTOS
//referenciamos el elemento del DOM
const par = document.querySelector('p');
//Creamos un evento para ese elemento
par.addEventListener('mouseover', ()=>{
    escribeOtroLog();
}) 
par.addEventListener('click', (e)=>{
    console.log(e.target.innerText);
    e.target.innerText = "Texto cambiado";
    console.log(e.target.innerText);
}) 

function escribeLog(){
    console.log("He hecho clic sobre el primer parrafo");
}

function escribeOtroLog(){
    console.log("He pasado sobre el primer parrafo");
}

document.addEventListener("keydown",(e) =>{
    console.log("Tecla presionada: " + e.key);
})