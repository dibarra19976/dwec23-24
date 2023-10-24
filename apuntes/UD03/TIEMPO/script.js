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


function crono(){
  let elcrono;
  let mifecha = new Date();
  let horas = mifecha.getHours();
  let minutos = mifecha.getMinutes();
  let segundos = mifecha.getSeconds();
  let ampm= "pm";

  if(horas >12){
    ampm = "pm";
    horas -= 12;
  }
  else{
    ampm = "am";
  }

  if (horas <10) { horas = "0" + horas};
  if (minutos <10) { minutos = "0" + minutos};
  if (segundos <10) { segundos = "0" + segundos};

  let lahora = document.getElementById("lahora");
  lahora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm ;
}

window.onload = function(){
  elcrono = setInterval (crono, 1000);
}