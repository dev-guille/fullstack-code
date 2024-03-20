function navegacionScroll(){
    var elementoNavegacion = document.querySelector('.grid-header');
    var navegacionAltura = elementoNavegacion.clientHeight;
    var elementoReferencia = document.querySelector('.titulo');

    function revisarPosicion(){
        var posicionY = elementoReferencia.getBoundingClientRect().bottom;
        if (posicionY - navegacionAltura < 0){
            elementoNavegacion.classList.add('scroll');
        }
        else{
            elementoNavegacion.classList.remove('scroll');
        }
    }
    window.addEventListener('scroll', revisarPosicion);
}

navegacionScroll();