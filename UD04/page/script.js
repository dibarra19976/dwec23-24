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
    tabla[fila][col] = (col + 1) * fila;
    if (tabla[fila][col] % 2 != 0) impares += tabla[fila][col] + ", ";
  }
  if (impares != "") {
    divs[fila].innerHTML = "<h3> Tabla del " + fila + "</h3>" + impares;
  }
}
console.log(tabla);

//METODODS DE ARRAYS
//push()
//pop() Elimina el ultimo elemento del array Y LO DEVUELVE

let paco = ["joan", "amparo", "esther"];
console.log(paco);
let elementoEliminado = paco.pop();
console.log(elementoEliminado);
console.log(paco);

//shift() Elimina el PRIMER elemento, y lo devuelve
//unshift() Agrega uno o mas elementos AL PRINCPIO
paco = ["joan", "amparo", "esther"];
console.log(paco);
elementoEliminado = paco.shift();
console.log(elementoEliminado);
console.log(paco);

paco.unshift("valentin");
console.log(paco);
paco.unshift("pepe", "pedro");
console.log(paco);

//concat() Combina dos o mas arrays y devuelve un nuevo array

paco.shift();
paco.shift();
paco.shift();

console.log(paco);

let otros = ["valentin", "pepe"];
let superpaco = paco.concat(otros);
console.log(superpaco);

//slice devuelve una copia (superficial) de una porcion del array
let copiaPaco = paco.slice(0, 1);
console.log(copiaPaco);

// splice() cambia el contenido de un array
// eliminando, reemplazando o agregando elementos.

// paco = ["joan","amparo","esther"];
// paco.splice(2, 0, ...otros.splice(1,9,paco))
// console.log(paco);

//indexOf() devuelve el primre indice que en el que se encuentra un elemento dado
//devuelve -1 si no lo encuentra
console.log(superpaco.indexOf("pepe"));

//lastIndexOf() devuelve el ultimo indice
console.log(paco.lastIndexOf("amparo"));

//join() une todos los elementos de un array en una cadena
let cadena = paco.join(" x ");
console.log(cadena);

//sort() ordena los elementos de un array alfabeticamente
//alfabeticametne si son cadenas
//numericametne si son numeros

otros = [3, "valentin", 2, "esther", -1, 0, 1, 19, 102, false, true, null];
console.log(otros.sort());
//orxdenar correctametne con un sort => uso de parametro
//se trata de una funcion:
//- debe recibir dos valores a comparar
//- como resultado debe:
//  - devolver un valor positivo (1) si el primer valor es superior al segundo
//  - devolver un valore negativo (-1) si el primer valor es inferior al segundo
//  - devolver un valor 0 si los dos valores osn iguales

// sort en numeros
let numeros = [1, 2, 3, 4, 1, 54, 15, 24, 2, 21, 24, 2];
console.log(numeros);
console.log(numeros.sort((a, b) => a - b));

//sort en cadenas

console.log(
  superpaco.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0;
  })
);

console.log(
  superpaco.sort((a, b) => {
    return a.localeCompare(b);
  })
);

/*

FUNCIONES

*/

function diHola() {
  console.log("Hola");
}

function multiplica(c, d) {
  let a = 10;
  let b = 20;

  return a * b * c * d;
}

let resultado = multiplica(12, 43);
console.log(resultado);

/*

OBJETOS

*/

let unCliente = {
  nombre: "Peter",
  apellidos: "Jackson",
  "direccion fiscal": "c/ Desconocida",
  "-+-+-+": "boquesa",
  pago: {
    tipo: "Visa",
    tarjeta: "7548486464",
    "fecha de caducidad": "nunca",
  },
  vencimiento: 30,
};

unCliente["vencimiento"] = 60;

console.log(unCliente["pago"]["tipo"]);
console.log(unCliente);
console.log(unCliente.nombre);
console.log(unCliente.pago["fecha de caducidad"]);

//metodos como elementos

let estudiante = {
  id: 2,
  nombre: "joan",
  diHola: ()=> console.log("hola"),
  diHola2 : function(){
    return "Hola";
  },
  notas: [10,0,4],
  mediaNotas : function(){
    let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
    return "Estudiante: " + this.nombre + " | Media: " + media;
  }
};


console.log(estudiante.diHola2());
estudiante.diHola();
console.log(estudiante.notas[1]);
console.log(estudiante.mediaNotas());
estudiante.apellido = "Ibarra";
estudiante.diAdios = function(){
  return "Adios";
}

//this

let factura = {
  descripcion: "Factura de prueba",
  precio : 100.0,
  iva : 21.0,
  subTotal : function(){
    return this.precio;
  },
  total : function (){
    return this.precio + (this.iva * this.precio)/100;
  }
}

console.log(factura.subTotal);
console.log(factura.subTotal());

console.log(factura.total);
console.log(factura.total());

// CONSTRRUCTORES

function Web(){
  this.url = "http://localhost";
  this.nombre = "Localhost";

  this.muestrInformacion = function(){
    return "url: " + this.url + "\n" + "Web: " + this.nombre;
  }

}
Web.prototype.visitas = 2;
Web.prototype.miFuncio = function(){
  return "Hola";
}

let unaWeb = new Web();
console.log(unaWeb);
unaWeb.url = "Https://www.fcbarcelona.cat";
unaWeb.nombre = "Més que un club";
console.log(unaWeb);
console.log(unaWeb.muestrInformacion());

let otraWeb = new Web();
console.log(otraWeb);
otraWeb.url = "https://friv.com";
otraWeb.nombre = "Friv Juegos";
console.log(otraWeb);
console.log(otraWeb.muestrInformacion());

