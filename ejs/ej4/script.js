//Constructor de los objetos tipo planeta
function Planeta() {
  this.nombre = "Nombre";
  this.distanciaSolKm = 1;
  this.tamanyooKm = 1;
  this.tamanyoRelativoTierra = 100;
  this.fechaDeDescubrimiento = new Date();

  //funcion que devuelve un string con la informacion
  this.mostrarInformacion = function () {
    return (
      "NOMBRE: " +
      this.nombre +
      "\nDISTANCIA AL SOL (KM): " +
      this.distanciaSolKm +
      "\nTAMAÑO (KM): " +
      this.tamanyooKm +
      "\nTAMAÑO RELATIVO A LA TIERRA : " +
      this.tamanyoRelativoTierra +
      "%" +
      "\nFECHA DE DESCUBRIMIENTO : " +
      this.fechaDeDescubrimiento
    );
  };
}

//un array que tiene un array por cada planeta con su informacion
let planetas = [
  ["Tierra", 150000000, 6371, 100, "N/A"],
  ["Venus", 108200000, 6052, 95, "1610"],
  ["Jupiter", 750000000, 69911, 1120, "Entre 1973 y 1974"],
  ["Saturno", 1418000000, 58232, 945, "1610 "],
  ["Neptuno", 4500000000, 24622, 388, new Date(1846 - 23 - 10)],
  ["Marte", 228000000, 3389, 53, "1610"],
  ["Mercurio", 58000000, 2439, 38, "265 A.C."],
];

//Se crea un array para los planetas
let objetosPlanetas = [];

//Con un bucle for each se van creando instancias de planeta con la informacion de los arrays
planetas.forEach((e) => {
  let planeta = new Planeta();
  planeta.nombre = e[0];
  planeta.distanciaSolKm = e[1];
  planeta.tamanyoKm = e[2];
  planeta.tamanyoRelativoTierra = e[3];
  planeta.fechaDeDescubrimiento = e[4];

  objetosPlanetas.push(planeta);
});

//Se muestra la informacion con la funcion y un bucle
objetosPlanetas.forEach((planeta) => {
  console.log(planeta.mostrarInformacion());
});

//se copia el array para ordenarlo y mostrarlo por pantalla con el metodo y un bucle
let planetasOrdenados = objetosPlanetas;
planetasOrdenados.sort((a, b) => a.distanciaSolKm - b.distanciaSolKm);

console.log("Planetas ordenados por distancia al Sol (de menor a mayor):");
planetasOrdenados.forEach((planeta) => {
  console.log(planeta.mostrarInformacion());
});
