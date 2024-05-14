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