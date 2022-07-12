intentos = 5;
intentosElem = document.querySelector('.intentos');
cartasVolteadas = [];
cartasPorAcertar = document.querySelector('.cartas').childElementCount;
habilitado = true;

intentosElem.innerHTML = intentos;
cantidadParesCarta = 4;

function esAcierto(grupoDeCartas) {

    grupoCartaUno = grupoDeCartas[0].getAttribute('group');
    grupoCartaDos = grupoDeCartas[1].getAttribute('group');
    console.table(grupoCartaUno, grupoCartaDos)
    return (grupoCartaUno == grupoCartaDos);
}

function ocultarCarta() {
    habilitado = false;
    setTimeout(function () {
        for (i = 0; i < cartasVolteadas.length; i++) {
            cartasVolteadas[i].innerHTML = ''
        }
        cartasVolteadas = [];
        habilitado = true;
    }
        , 2000)
}

function mostrarNoHabilitado(carta) {
    numeroDeGrupo = carta.getAttribute('group');
    carta.classList.add('bg-danger');
    carta.classList.add('shake');
    setTimeout(() => {
        carta.classList.remove('shake');
        carta.classList.remove('bg-danger');
    }, 1000)
}

function mostrarAcierto(cartasVolteadas) {
    for (carta of cartasVolteadas){
    carta.classList.remove('bg-primary');
    carta.classList.add('success');
    mostrarImagen(carta);
}
}

function mostrarImagen(carta) {
    numeroDeGrupo = carta.getAttribute('group');
    carta.innerHTML = '<img class="card-img-top" style="height:100%; object-fit: cover; width: 100%;" src="./img/grupo' + numeroDeGrupo + '.jpeg">';
}

function mostrarCarta(carta) {

    cartasVolteadas.push(carta);

    if (!habilitado) {
        mostrarNoHabilitado(carta);
        return;
    }

    if (cartasVolteadas.length == 2) {

        if (esAcierto(cartasVolteadas)) {
            console.log("ACIERTO");
            mostrarAcierto(cartasVolteadas)
            cartasVolteadas = [];
            cartasPorAcertar = cartasPorAcertar - 2;

        } else {
            console.log("FRACASO");
            mostrarImagen(carta);
            ocultarCarta()
            intentos--;
            intentosElem.innerHTML = intentos;
        }

    } else {
        console.log("RESTA DAR VUELTA OTRA CARTA");
        mostrarImagen(carta);
    }

    if (cartasPorAcertar == 0) {
        document.querySelector('.cartas').innerHTML = '<h1>Ganador<h2>';
    }

    if (intentos <= 0) {
        document.querySelector('.cartas').innerHTML = '<h1>Perdiste<h2>';
    }

    console.log('intentos restantes =' + intentos);
    console.log('cartas por acertar:' + cartasPorAcertar);
}
