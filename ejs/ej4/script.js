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
let nombres = [
  "Tierra", "Venus", "Jupiter", "Saturno", "Neptuno", "Marte", "Mercrio"
];

let distanciasSolKm = [
  150000000, 108200000, 750000000, 1418000000, 4500000000, 228000000, 58000000
];

let tamanyoosKm = [
  6371, 6052, 69911, 58232, 24622, 3389, 2439
]

let tamanyosRelativoTierra = [
  100, 95, 1120, 945, 388, 53, 38
] 

let fechasDeDescubrimiento = [
  "N/A", "1610", "Entre 1973 y 1974", "1610 ", new Date(1846 - 23 - 10), "1610",  "265 A.C."
]

/*
let planetas = [
  ["Tierra", 150000000, 6371, 100, "N/A"],
  ["Venus", 108200000, 6052, 95, "1610"],
  ["Jupiter", 750000000, 69911, 1120, "Entre 1973 y 1974"],
  ["Saturno", 1418000000, 58232, 945, "1610 "],
  ["Neptuno", 4500000000, 24622, 388, new Date(1846 - 23 - 10)],
  ["Marte", 228000000, 3389, 53, "1610"],
  ["Mercurio", 58000000, 2439, 38, "265 A.C."],
];
*/


//Se crea un array para los planetas
let objetosPlanetas = new Array(7);

//Con un bucle for each se van creando instancias de planeta con la informacion de los arrays
for (let i = 0; i<objetosPlanetas.length; i++){
  let planeta = new Planeta();
  planeta.nombre = nombres[i];
  planeta.distanciaSolKm = distanciasSolKm[i];
  planeta.tamanyoKm = tamanyoosKm[i];
  planeta.tamanyoRelativoTierra = tamanyosRelativoTierra[i];
  planeta.fechaDeDescubrimiento = fechasDeDescubrimiento[i];
  objetosPlanetas[i] = planeta;
}

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
