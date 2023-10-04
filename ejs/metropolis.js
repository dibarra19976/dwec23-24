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

let esCapital = false;
let numeroCiudadanos = 351752;
let impuestosPorCiudadano = 100;
const esMetropolis =
  (esCapital == true && numeroCiudadanos > 100000) ||
  (numeroCiudadanos > 200000 &&
    numeroCiudadanos * impuestosPorCiudadano * 12 > 720000000);

console.log("¿Es metroplis?", esMetropolis);
