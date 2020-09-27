// Elemento





// Elemento
const turno = 1;
const queturno;
const juegotres = new Array(9);


// Evento
function raya() {


}
function cargarJuego() {
  document.getElementById("c1").addEventListener("click", raya);

}

// Ejecución 

window.addEventListener("load", cargarJuego);
