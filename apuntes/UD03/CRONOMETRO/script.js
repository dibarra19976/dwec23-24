// // funciones
// // setInterval() & setTimeOut()

// /*
//   setTimeOut(funcionALlamar, milisegundos)
//   Ejecuta la funcion funcionFuncionALLamar traunscurrido el tiempo indicado en el segundo parametro

//   setInterval(funcionALlamar, millisegundos)
//   Ejecuta la funcion funcionALlamar de manera periodica, segun el tiempo del segundo parametro

//   clearInterval()
//   Detiene la ejecuccion iniciada con setInterval()

//   clearTimeOut()
//   Detiene la ejecucion iniciada con setTimeOut()

//   */
// let elcrono;

// function crono() {
//   let mifecha = new Date();
//   let horas = mifecha.getHours();
//   let minutos = mifecha.getMinutes();
//   let segundos = mifecha.getSeconds();
//   let ampm = "pm";

//   if (horas > 12) {
//     ampm = "pm";
//     horas -= 12;
//   } else {
//     ampm = "am";
//   }

//   if (horas < 10) {
//     horas = "0" + horas;
//   }
//   if (minutos < 10) {
//     minutos = "0" + minutos;
//   }
//   if (segundos < 10) {
//     segundos = "0" + segundos;
//   }

//   let lahora = document.getElementById("lahora");
//   lahora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;
// }

// function reset() {
//   mifecha = new Date(0);
// }

// function action() {
//   if (boton.innerHTML == "Start") {
//     reset();
//     elcrono = setInterval (crono, 1000);
//     boton.innerHTML = "Stop";

//   } else if (boton.innerHTML == "Stop") {
//     clearInterval(elcrono);
//   boton.innerHTML = "Start";
//   }
// }

// let boton = document.getElementById("boton");

// funciones
// setInterval() & setTimeOut()

/*
  setTimeOut(funcionALlamar, milisegundos)
  Ejecuta la funcion funcionFuncionALLamar traunscurrido el tiempo indicado en el segundo parametro

  setInterval(funcionALlamar, millisegundos)
  Ejecuta la funcion funcionALlamar de manera periodica, segun el tiempo del segundo parametro

  clearInterval()
  Detiene la ejecuccion iniciada con setInterval()

  clearTimeOut()
  Detiene la ejecucion iniciada con setTimeOut()

  */

let elcrono;
let mifecha = new Date();
let lahora = document.getElementById("lahora");

mifecha.setHours(0, 0, 0, 0);

lahora.innerHTML = "00:00:00";

function crono() {
  let horas = mifecha.getHours();
  let minutos = mifecha.getMinutes();
  let segundos = mifecha.getSeconds();

  segundos += 1;

  if (segundos == 60) {
    segundos = 0;
    minutos += 1;
  }

  if (minutos == 60) {
    minutos = 0;
    horas += 1;
  }

  mifecha.setSeconds(segundos);
  mifecha.setMinutes(minutos);
  mifecha.setHours(horas);

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  lahora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reset() {
  mifecha.setHours(0, 0, 0, 0);
  lahora.innerHTML = "00:00:00";
}

function start() {
  if (elcrono == null) {
    elcrono = setInterval(crono, 1000);
  }
}

function stop() {
  clearInterval(elcrono);
  elcrono = null;
}

let boton = document.getElementById("boton");
