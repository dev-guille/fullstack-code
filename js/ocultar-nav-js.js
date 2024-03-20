/* FUNCION PARA OCULTAR NAV LATERAL FICHERO JAVASCRIPT.HTML */

(function esconderColumna_js(d) {
  "use strict";
  const columnaLateral = d.querySelector(".grid-contenedor-js");
  const evento = d.querySelector("#evento-js");
  evento.addEventListener("click", esconderColumnaIzquierda);
  function esconderColumnaIzquierda() {
    columnaLateral.classList.toggle("ocultar");
  }
})

(document);