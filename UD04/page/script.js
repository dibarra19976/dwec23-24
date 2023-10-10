/*
    ARRAYS



*/

// Defniir arrays

let vacio = []; //no tiene elementos
let primos = [2, 3, 5, 7, 11]; //con 5 elementos numericos
let miscelanea = [1.1, 4, true, null, "String"]; // varios tipos

//los valores no tienen porque ser constantes
let n = 1024;
let tabla1 = [n, n + 1, n + 2, n + 3];

let contador = [, , , , , ,];
console.log(contador.length);

//Operador SPREAD

let a = [1, 2, 3];
let b = [0, ...a, 4];

console.log(b);

let original = [1, 2, 3];
let copia = [...original, ...original];
original[0] = 9;
console.log(copia);
console.log(original[0]);

let digitos = [..."0123456789ABCDEF"];
console.log(digitos);

//Constructor de Array
let aa = new Array(1, 2, 3, 4, 54, -1, "prueba", true, "🤑🤑🤑🤑🤑🤑");
let bb = Array.of(10, 3);
console.log(aa[aa.length - 1]);
console.log(aa.length);
console.log(bb.length);
aa[119] = 10;
console.log(aa.length);

//push añade elemento al final

aa.push("hola");
console.log(aa[aa.length - 1]);

let aaa = [1, 2, 3, 4];
console.log(aaa);
delete aaa[2];
console.log(aaa);
let z = 3;
if (a[z]) {
  console.log(a[z]);
} else {
  console.log("Slot Vacio");
}

//slot vacio = false

/*

Iterando arrays

*/

let letras = [..."Hola amiguitos"];
let aux = "";

for (let letra of letras) {
  aux += letra;
}
console.log(aux);
aux = "";

for (let [index, letra] of letras.entries()) {
  if (index % 2 === 0) aux += letra;
}
console.log(aux);

let mayusculas = "";
let i = 0;
letras.forEach((letra) => {
  if (i % 2 === 0) mayusculas += letra.toUpperCase();
  i++;
});
console.log(mayusculas);

let vocales = "";
let letra = "";
for (let i = 0; i < letras.length; i++) {
  letra = letras[i];

  if (/[aeiou]/.test(letra)) {
    vocales += letra;
  }
}
console.log(vocales);

/*
ARRAYS MULTIDIMENSIONALES
*/

let tabla = new Array(10);

for (let i = 0; i < tabla.length; i++) {
  tabla[i] = new Array(10);
}

let divs = document.getElementsByClassName("tabla");

for (let fila = 0; fila < tabla.length; fila++) {
  let impares = "";
  for (let col = 0; col < tabla[fila].length; col++) {
    tabla[fila][col] = (col+1)*(fila);
    if (tabla[fila][col] % 2 !=0 ) impares += tabla[fila][col]+ ", ";
  }
  
  divs[fila].innerHTML = "<h3> Tabla del " + fila+ "</h3>" + impares;
}
console.log(tabla);
