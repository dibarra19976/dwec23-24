
let nomEstudiant = "Jose";
let notaExamen1 = 7;
let notaExamen2 = 7;
let notaProjecte = 4;

const notaFinal = notaProjecte * 0.6 + notaExamen2 * 0.2 + notaExamen1 * 0.2;

console.log(notaFinal);

console.log(
  "Estudiante:",
  nomEstudiant,
  "\n\nNota del examen 1:",
  notaExamen1,
  "\nNota del examen 2:",
  notaExamen2,
  "\nNota proyecto:",
  notaProjecte,
  "\n\nNota final:",
  notaFinal
);
if(notaFinal>7){
  console.log("¡Felizidades", nomEstudiant, "! ¡Has aprobado el modulo!");
}
else{
  console.log(nomEstudiant, ", no has aprobado el modulo. Necesitas esforzarte mas.");

}