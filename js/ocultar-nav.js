/* FUNCION PARA OCULTAR NAV LATERAL */

(function esconderColumna(d) {
  "use strict";
  const columnaLateral = d.querySelector(".grid-contenedor");
  const evento = d.querySelector("#evento");
  evento.addEventListener("click", esconderColumnaIzquierda);
  function esconderColumnaIzquierda() {
    columnaLateral.classList.toggle("ocultar");
  }
})

(document);