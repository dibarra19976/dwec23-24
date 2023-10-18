//Variables de las temperaturas
const any2010Juny = 25.8;
const any2010Juliol = 28.6;
const any2010Agost = 30.1;

const any2015Juny = 26.5;
const any2015Juliol = 29.3;
const any2015Agost = 30.8;

const any2020Juny = 27.2;
const any2020Juliol = 29.9;
const any2020Agost = 31.5;

//Variables y calculos del las medias por año
let mitjanaAny2010 = (any2010Agost + any2010Juliol + any2010Juny) / 3;
let mitjanaAny2015 = (any2015Agost + any2015Juliol + any2015Juny) / 3;
let mitjanaAny2020 = (any2020Agost + any2020Juliol + any2020Juny) / 3;

//Guarda en una variable booleana  si la media supera los 30 grados 
let superatAny2010 = mitjanaAny2010 > 30;
let superatAny2015 = mitjanaAny2015 > 30;
let superatAny2020 = mitjanaAny2020 > 30;

//Utiliza operadores ternario y la variable boolean para mostrar si supera los 30 grados 
console.log(
  "La media de la temperatura durante el año 2010 " +
    (superatAny2010 ? "ES" : "NO ES") +
    " mayor a 30ºC"
);

console.log(
  "La media de la temperatura durante el año 2015 " +
    (superatAny2015 ? "ES" : "NO ES") +
    " mayor a 30ºC"
);

console.log(
  "La media de la temperatura durante el año 2020 " +
    (superatAny2020 ? "ES" : "NO ES") +
    " mayor a 30ºC"
);

//Conversion a Fahrenheit de las medias
let mitjanaAny2010Fahrenheit = ((mitjanaAny2010 * 9 / 5) +32);
let mitjanaAny2015Fahrenheit = ((mitjanaAny2015 * 9 / 5) +32);
let mitjanaAny2020Fahrenheit = ((mitjanaAny2020 * 9 / 5) +32);

//Conversion a Kelvin de las medias
let mitjanaAny2010Kelvin = (mitjanaAny2010 + 273.5);
let mitjanaAny2015Kelvin = (mitjanaAny2015 + 273.5);
let mitjanaAny2020Kelvin = (mitjanaAny2020 + 273.5);

//Muestra la informacion por la consola

console.log(
    "AÑO: 2010" 
    + "\nMEDIA EN CELSIUS: " + mitjanaAny2010 
    + "\nMEDIA EN FAHRENHEIT: " + mitjanaAny2010Fahrenheit 
    + "\nMEDIA EN KELVIN: " + mitjanaAny2010Kelvin 
    + "\nLa temperatura media " + (superatAny2010 ? "supera" : "no supera") + " los 30º Celsius"
);

console.log(
    "AÑO: 2015" 
    + "\nMEDIA EN CELSIUS: " + mitjanaAny2015 
    + "\nMEDIA EN FAHRENHEIT: " + mitjanaAny2015Fahrenheit 
    + "\nMEDIA EN KELVIN: " + mitjanaAny2015Kelvin 
    + "\nLa temperatura media " + (superatAny2015 ? "supera" : "no supera") + " los 30º Celsius"
);

console.log(
    "AÑO: 2010" 
    + "\nMEDIA EN CELSIUS: " + mitjanaAny2020 
    + "\nMEDIA EN FAHRENHEIT: " + mitjanaAny2020Fahrenheit 
    + "\nMEDIA EN KELVIN: " + mitjanaAny2020Kelvin 
    + "\nLa temperatura media " + (superatAny2020 ? "supera" : "no supera") + " los 30º Celsius"
);