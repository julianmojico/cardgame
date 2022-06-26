oportunidades = 5;
cartasVolteadas = [];
cartasPorAcertar = document.querySelector('.cartas').childElementCount;

function esAcierto(grupoDeCartas) {

    grupoCartaUno = grupoDeCartas[0].getAttribute('group');
    grupoCartaDos = grupoDeCartas[1].getAttribute('group');
    console.table(grupoCartaUno, grupoCartaDos)
    return (grupoCartaUno == grupoCartaDos);
}

function voltearAbajo() {
    setTimeout(function () {
        for (i = 0; i < cartasVolteadas.length; i++) {
            cartasVolteadas[i].innerHTML = ''
        }
        cartasVolteadas = [];
    }
        , 3000)
}


function voltearArriba(carta) {

    cartasVolteadas.push(carta);
    numeroDeGrupo = carta.getAttribute('group');


    if (cartasVolteadas.length == 2) {

        if (esAcierto(cartasVolteadas)) {
            console.log("ACIERTO");
            carta.innerHTML = '<img class="card-img-top" style="height:100%; object-fit: cover; width: 100%;" src="./img/grupo' + numeroDeGrupo + '.jpeg">';
            cartasVolteadas = [];
            cartasPorAcertar = cartasPorAcertar - 2;

        } else {
            console.log("FRACASO");
            carta.innerHTML = '<img class="card-img-top" style="height:100%; object-fit: cover; width: 100%;" src="./img/grupo' + numeroDeGrupo + '.jpeg">';
            voltearAbajo()
            oportunidades--;
        }

    } else {
        console.log("RESTA DAR VUELTA OTRA CARTA");
        carta.innerHTML = '<img class="card-img-top"  style="height:100%; object-fit: cover; width: 100%;" src="./img/grupo' + numeroDeGrupo + '.jpeg">';
    }

    if (cartasPorAcertar == 0) {
        document.querySelector('.cartas').innerHTML = '<h1>Ganador<h2>';
    }

    if (oportunidades <= 0) {
        document.querySelector('.cartas').innerHTML = '<h1>Perdiste<h2>';
    }

    console.log('oportunidades restantes =' + oportunidades);
    console.log('cartas por acertar:' + cartasPorAcertar);
}
