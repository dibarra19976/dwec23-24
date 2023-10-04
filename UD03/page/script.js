/*
    ESTRUCTURAS DE CONTRL

    Se utilizan para controlar el flujo 
    de un programa.
*/

/*
    if
    Se utiliza para ejecutar un bloque de codigo 
    si se cumple una condicion.
*/

// let edad = 18;
// let esMayordeEdad = edad >= 18;

// if (esMayordeEdad) {
//   console.log("Es mayor de edad");
// }
// else if (edad > 12){
//   console.log("Teenager");
// }
// else if (edad > 5){
//   console.log("Estas en primaria");
// }
// else{
//   console.log("Eres un renacuajo");
// }

// let edad = 14;
// let esMayordeEdad = (edad >=18);

// let resultado = esMayordeEdad ? "Eres mayor d eedad" : "Eres enor de edad";
// console.log(resultado);

// let a = 10;
// let b = 20;
// let resultado2 = (a>b) ? (a-b) : (b-a);
// console.log(resultado2);

/*Switch - Case

  Cuando se quiera hacer una estructura condicional segun el valor
  que tenga una variable o expresion
  

*/

// let nombre = "Aragorn";
// let edad;

// switch (nombre) {
//   case "Gandalf":
//     edad = 1230;
//     break;
//   case "Aragorn":
//     edad = 532;
//     break;
//   case "Frodo":
//     edad  = "50"
//     break;
//   default:
//     edad = 0;
//     break;
// }

// console.log("Nombre: ", nombre, " Edad: ", edad );

// ITERACIONES
// Se utilizar para repeter una porcion de codigo varias veces

/* while
  repetir un bloque entre llaves mientras se cumpla una condicion
*/

// let contador = 0;
// while (contador < 5){
//   contador++;
//   console.log(contador);
// }

/* do-while
  Se utiliza para repetir un bloque de codigo al menos una vez

*/

// let contador = 5;
// do{
//   console.log(contador);
//   contador+=5;
// }while(contador <16);

/* for
  repetir un bloque de codigo u nnumero especifico de veces
  
  break /continue
    break: detiene el bucle
    continue: saltar a la siguiente iteracion

*/

// for (let i = 0; i <10; i++){
//   console.log(i);
// }

let nomEstudiant = "Jose";
let notaExamen1 = 7;
let notaExamen2 = 7;
let notaProjecte = 4;

const notaFinal = notaProjecte * 0.6 + notaExamen2 * 0.2 + notaExamen1 * 0.2;

console.log(notaFinal);

console.log(
  "Estudiante:",
  nomEstudiant,
  "\n\nNota del examen 1:",
  notaExamen1,
  "\nNota del examen 2:",
  notaExamen2,
  "\nNota proyecto:",
  notaProjecte,
  "\n\nNota final:",
  notaFinal
);
if(notaFinal>7){
  console.log("¡Felizidades", nomEstudiant, "! ¡Has aprobado el modulo!");
}
else{
  console.log(nomEstudiant, ", no has aprobado el modulo. Necesitas esforzarte mas.");

}