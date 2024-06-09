function calcsono() {
    let botaoan = document.getElementById('botaoanos').value;
    let botaome = document.getElementById('botaomeses').value;

    function escrita(text) {
        let escrita = document.getElementById('text__horas').innerHTML = text;
    }

    if (botaoan == "") {
        if (botaome >= 1 && botaome <= 3) {
            escrita('Durma entre 14 a 17 horas por dia');
        } else if (botaome >= 4 && botaome <= 11) {
            escrita('Durma entre 12 a 16 horas por dia');
        } else {
            escrita('')
        }
    } else if (botaoan >= 1 && botaoan <= 2) {
        escrita('Durma entre 11 a 14 horas por dia');
    } else if (botaoan >= 3 && botaoan <= 5) {
        escrita('Durma entre 10 a 13 horas por dia');
    } else if (botaoan >= 6 && botaoan <= 13) { 
        escrita('Durma entre 9 a 11 horas por dia');
    } else if (botaoan >= 14 && botaoan <= 17) { 
        escrita('Durma entre 8 a 10 horas por dia');
    } else if (botaoan >= 18 && botaoan <= 64) { 
        escrita('Durma entre 7 a 9 horas por dia');
    } else if (botaoan >= 65 && botaoan <= 170) { 
        escrita('Durma entre 7 a 9 horas por dia');
    } else {
        escrita('Confira novamente! Algo está errado!');
    }
}

function funconfetti() {

    // start
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  Stop
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    start();
    stop();
}

var numero = []


function projeto1(number, text, text2) {
    numero = []
    numero.push(number)
    if (numero[0] == 1) {
        document.getElementById(`titulo-2`).innerHTML = 'Meditação';
        document.getElementById(`botao-2`).innerHTML = 'Elaborar';
        document.getElementById(`paragrafo-2`).innerHTML = 'Uma prática onde um indivíduo usa uma técnica para alcançar um estado mentalmente claro e emocionalmente calmo.';
    } else if (numero[0] == 2) {
        document.getElementById(`titulo-1`).innerHTML = 'Cozinhar';
        document.getElementById(`botao-1`).innerHTML = 'Elaborar';
        document.getElementById(`paragrafo-1`).innerHTML = 'A arte, a ciência e o ofício de usar o calor para preparar alimentos para consumo.';
    }
    document.getElementById(`titulo-${number}`).innerHTML = text;
    document.getElementById(`paragrafo-${number}`).innerHTML = text2;

    document.getElementById(`botao-${number}`).innerHTML = 'Concluir',
    document.getElementById(`botao-${number}`).onclick = concluidos;
}

function concluidos(number) {
    if (numero[0] == 1) {
        document.getElementById(`titulo-${numero[0]}`).innerHTML = 'Cozinhar';
        document.getElementById(`paragrafo-${numero[0]}`).innerHTML = 'A arte, a ciência e o ofício de usar o calor para preparar alimentos para consumo.';
    } else if (numero[0] == 2) {
        document.getElementById(`titulo-${numero[0]}`).innerHTML = 'Meditação';
        document.getElementById(`paragrafo-${numero[0]}`).innerHTML = 'Uma prática onde um indivíduo usa uma técnica para alcançar um estado mentalmente claro e emocionalmente calmo.';
    }

    document.getElementById(`botao-${numero[0]}`).onclick = projeto1;
    document.getElementById(`botao-${numero[0]}`).innerHTML = 'Elaborar';
    
    // start
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  Stop
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    start();
    stop();

    const restart = () => {
        setTimeout(function() {
            location.reload()
        }, 6000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    restart()
}