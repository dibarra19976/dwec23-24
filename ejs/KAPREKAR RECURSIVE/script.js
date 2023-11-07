const numeroKaprekar = 6174;

let pasos = 0;
let numero;

// Pedimos al usuario que introdusza el numero y lo capturamos.
// Sera una cadena
const promptText = "Escribe un numero de cuatro cifras";
//Lanzamos el prompt
// numero = prompt(promptText);

numero = "7851";
if(!validaNumero(numero)){
  console.log("El numero no es valido");
}
else{
    // Llamamos a lafuncion kaprekar
    numero = kaprekar(numero);

    //Evitamos bucles infinitos i/o innecesarios
    if(pasos > 7){
      console.log("Numero de pasos superado, algo no esta bien");
    }
    
  
}

/*
  funcion que valida un numero, comprobando que:
  - Sea un numero
  - Que no tenga mas o menos de 4 digitos
  - Un digito no se repita mas de dos veces.
*/

function validaNumero(numero){
  
  if (numero == null || isNaN(numero)){
    return false;
  }

  if(+numero > 9999 || +numero <= 22){
    return false;
  }

  //const numeros = Array.from (String(numero), Number);
  //const numeros = numero.split("")
  // const numeros = [...numero];
  const setNumeros = new Set(numero);
  if(setNumeros.size < 2){
    return false;
  }
  console.log(setNumeros);
  return true;
}

/*
  Funcion que realiza las operaciones necesarias para obtener el numero de 
  Kaprekar pasandole como parametro el numero a tratar.
  Devuelve el numero obtenido
*/

function kaprekar(numero){

  //Creamos un array para poder tratar el numero
  //digito a digito

  let arrNumero = new Array();

  //variables para guardar los numeros a restar

  let mayor, menor;

  // Añadiremos el numero al array

  // for(let i = 0; i <numero.length; i++){
  //   arrNumero[i] = numero[i];
  // }

  // for(let i = 0; i <numero.length; i++){
  //   arrNumero[i] = numero.charAt(i);
  // }

  for(let i = 0; i <numero.length; i++){
    arrNumero.push(numero.charAt(i));
  }

  arrNumero.sort();
  // Ordenamos el array con sort
  // Quedara de menor a mayor

  // Guardamos en la variable "menor" el contenido"
  menor = uneDigitos(arrNumero);

  // Le damos la vuelta al array y por lo tanto al numreo
  // arrNUmeros.reverse()
  arrNumero =  daleLaVuelta(arrNumero);

  // Guardamos en la variable "mayor" el contenido"
  mayor = uneDigitos(arrNumero);

  // Realizamos la resta

  numero = +mayor - +menor;

  console.log(mayor + " - " + menor + " = "+ numero);

  let numeroFormateado = formateaNumeroACuatroDigitos(numero.toString(), true);

  pasos++;
  
  if(numeroFormateado != 1 && pasos < 7){
    kaprekar(numeroFormateado); 

  }
  else{
    return numeroFormateado;
  }

}

/*
  Devuelve una cadena formada con los elementos del array 
  pasado por parametro, tomados como caracteres desde el 
  de menor indice hasta el ultimo
*/

function uneDigitos(arrNumero){
  let cadena ="";
  for(let i=0; i<arrNumero.length; i++){
    cadena += arrNumero[i];
  }
  return cadena;
}

/*
  Devuelve un array con los eolementos cambiados simetricamente respescto 
  al array pasado por parametro
*/

function daleLaVuelta(arrNumero){

  let arrAux = new Array(arrNumero.length);

  for(let j = 0; j < arrNumero.length; j++){
    arrAux[arrNumero.length - 1 - j] = arrNumero[j];
  }

  return arrAux;
}

/* 
  Añade ceros delante o detras de una cadena que 
  representa un valor numerico que necesariamente ha de 
  tener cuatro digitos
*/

function formateaNumeroACuatroDigitos(numero, esIzquierda){
  if(esIzquierda){
    if(numero.length == 3){
      numero = "0" + numero
    }
    else if(numero.length == 2){
      numero = "00" + numero
    }
    else if(numero.length == 1){
      numero = "000" + numero
    }
  }
  else{
    if(numero.length == 3){
      numero = numero + "0" 
    }
    else if(numero.length == 2){
      numero = numero + "00" 
    }
    else if(numero.length == 1){
      numero =  numero +"000" 
    }
  }

  return numero;
}

