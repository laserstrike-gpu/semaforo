const rojo = document.querySelector("#rojo");
const amarillo = document.querySelector("#amarillo");
const verde = document.querySelector("#verde");

const botonRojo = document.querySelector("#botonRojo");
const botonAmarillo = document.querySelector("#botonAmarillo");
const botonVerde = document.querySelector("#botonVerde");

let colorActivo = "";

actualizarSemaforo();

botonRojo.addEventListener("click", prenderRojo);
botonAmarillo.addEventListener("click", prenderAmarillo);
botonVerde.addEventListener("click", prenderVerde);

function actualizarSemaforo() {

    rojo.style.background = "#444";
    amarillo.style.background = "#444";
    verde.style.background = "#444";

    if (colorActivo === "rojo") {
        rojo.style.background = "red";
    }

    if (colorActivo === "amarillo") {
        amarillo.style.background = "yellow";
    }

    if (colorActivo === "verde") {
        verde.style.background = "lime";
    }

}

function prenderRojo() {

    colorActivo = "rojo";

    actualizarSemaforo();

}

function prenderAmarillo() {

    colorActivo = "amarillo";

    actualizarSemaforo();

}

function prenderVerde() {

    colorActivo = "verde";

    actualizarSemaforo();

}