//Capturar los elementos del DOM
const container = document.querySelector(".contenidor");
const seients = document.querySelectorAll(".fila .seient:not(.ocupat)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaselect = document.getElementById("pelicula");

//Precio de la pelicula seleccionada
let preuDelTicket = +peliculaselect.value;

//Funciones

function actualizaSeleccioSeients() {
  const seientsSeleccionats = document.querySelectorAll(
    ".fila .seient.seleccionat"
  );

  // const seientsIndex = [...seientsSeleccionats].map(function(seient){
  //     return [...seients].indexOf(seient);
  // });

  const seientsIndex = [...seientsSeleccionats].map((seient) =>{
    return [...seients].indexOf(seient);
  });

  localStorage.setItem("seientsSeleccionats",JSON.stringify(seientsIndex));

  const contadorSeientsSeleccionats = seientsSeleccionats.length;
  contador.innerHTML = contadorSeientsSeleccionats;
  total.innerHTML = contadorSeientsSeleccionats*preuDelTicket;
}

//Eventos
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seient") &&
    !e.target.classList.contains("ocupat")
  ) {
    e.target.classList.toggle("seleccionat");
    actualizaSeleccioSeients();
  }
});

peliculaselect.addEventListener("change", (e) => {
    preuDelTicket = +e.target.value;

    localStorage.setItem("indexPeliculaSeleccionada", e.target.selectedIndex);
    localStorage.setItem("preuPeliculaSeleccionada", e.target.value)

    actualizaSeleccioSeients();
});