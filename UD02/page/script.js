//Comentario de una linea

/*Comentario 
de mas de 
una linea
*/

// saluda();

// function saluda() {
//     console.log(">_<");
// }

// var
// let
// const

// const PI = 3.14151692;

// patata();

// function patata(){
//     var nombre = "Jonathan Joestar";
//     let edad = 434;
//     {
//         console.log(edad);
//     }
// }
// var edad = 6682;
// console.log(edad)
// console.log;

// let uno = 1; let dos = 2;
// console.log(uno+dos);

// // String
// let nombre = "Lama";
// let apellido = "Maste";
// let nombreCompleto =" Lamamaste JAAJSAJASJJASAS";
// let comillas = " texto \"con comishas\"";
// console.log(comillas);

// //numero
// let edad = 26;
// let anyos = "26";
// console.log(typeof edad, typeof anyos);

// let edad2 = -26;
// let masEdad = 66;
// console.log(masEdad+ edad);

// let precio = 21.99;
// let aprobados = Infinity;
// let suspendidos = -Infinity;

// console.log(aprobados);
// console.log(typeof aprobados);
// console.log(suspendidos);
// console.log(typeof suspendidos);
// console.log(masEdad + aprobados);

// // null
// let valor = null;
// console.log(typeof valor);

// //undefined
// let algo;
// console.log(typeof algo)

// //notanumber NaN
// let algo2 = "veintiseis";
// console.log(algo2);

// // typeOf
// let persona = {
//     nombre: "Bing",
//     apellido: "Chilling",
//     edad: 12
// }
// console.log(persona.edad);

// //boolean
// let messi = true;
// let penaldo = false; //falsy

// // null, empty string, undefined, 0, NaN == false

// if (algo){
//     console.log("hola");
// }else{
//     console.log("adios");
// }

// Operadores aritmeticos
// --> Operaciones aritmeticas

// +    a + b
// -    a - b
// *    a * b
// /    a / b
// %    a % b (modulo)

// ++   incremento          a--, ++a
// --   decremento          a--, --a
// +=   suma y asigna       a +=b // a = a + b
// -=   resta y asigna      a -=b // a = a - b
// *=   multiplica y asigna a *= b // a = a * b
// /=   divide y asigna     a /=b //  a = a / b
// %=   modulo y asigna     a %=b // a = a % b

// -    cambio de signo     // a = 5, b = -a, b = -5

// let a = 4;
// ++a;
// console.log(a);

// let b = "5";
// let c = "6";

// console.log(typeof b, typeof c);
// console.log(b+c);

// let B = parseInt(b);
// console.log(B);
// let C = parseInt(c);
// console.log(B+C);
// console.log(typeof B, typeof C);

// let d = "4.52";

// let a = "5";
// let b = "6";

// let c = "4.52";

// let A = +a;
// let B = +b;
// let C = +c;
// console.log(A + B);
// console.log(C);
// console.log(typeof A, typeof B, typeof C);
// console.log(+a + +b);

// operadores de comparacion
// -> Comparar do valores y devolver un resultado booleano

// >    mayor que

// <    menor que

// >=   mayor o igual que

// <=   menor o igual que

// ==   igual que

// !=   distinto que

// ===  igual en valor y tipo que

// !== distinto en valor o tipo que

// Operadores booleanos
// -> Permiten comparar expresiones booleanas con las que se
// construen condiciones que se pueden aplicar en
// funciones, bucles, etc

// && AND   Solo devuelve true cuando ambos operadores lo son

// || OR    Devuelve true cuando uno de los operadores es true

// !  NOT      devuelve el contraroi del operador

// let cadena = "xsd";
// if (cadena != null && cadena.length>0){
//     console.log(cadena);
// }
// else{
//     console.log("La cadena esta vacia");
// }

//Ejercccio

/*
Se nos facilitan tres variables que contienen informacion sobre una ciudad

esCapital / boolean
numeroCiudadanos / number/integer
impuestoPorCiudadano / number/float

- esCapital: sera true si y solo si la ciudad es capital
- numeroCiudadanos: numero de ciudadanos de esa ciudad
- impuestoPorCiudadano: impuesto medio mensual que paga un ciudadano de esa ciudad

Para nosotros, una Metropolis sera una ciudad si bien es una capital con mas de 100.000 ciudadanos, 
o bien es una ciudad con mas de 200.000 ciudadanos y una renta media de 720.000.000 al año

Dad una expresion booleana con las tres variables de tal manera que sea cierta si y solo si la ciudad es una Metropolis

*/
/*


let ciudad = {
  esCapital: true,
  numeroCiudadanos: 351752,
  impuestosPorCiudadano: 200,
  esMetropolis: ((this.esCapital == true && this.numeroCiudadanos > 100000) 
  ||
  (this.numeroCiudadanos > 200000 && (this.numeroCiudadanos * this.impuestosPorCiudadano * 12 ) > 720000000))
};

console.log("¿Es metroplis?", ciudad.esMetropolis);
console.log(ciudad.esMetropolis);




*/

// --- Metròpolis

let esCapital = false;
let numeroCiudadanos = 351752;
let impuestosPorCiudadano = 100;
const esMetropolis =
  (esCapital == true && numeroCiudadanos > 100000) ||
  (numeroCiudadanos > 200000 && numeroCiudadanos * impuestosPorCiudadano * 12 > 720000000);

console.log("¿Es metroplis?", esMetropolis);
