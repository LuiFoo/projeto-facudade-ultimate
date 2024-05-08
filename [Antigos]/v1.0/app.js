var users = []

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    function invalLogin(text){

        let erroLo = document.getElementById('text__login')

        erroLo.textContent = text
    }

    if(login == "user" && senha == "user"){
        location.href = "home.html";
    } else{
        invalLogin('Usuário ou senha incorretos');
    }

}


function  idade_usuario() {
    let horasDormidas = document.getElementById('anos').value;
    let mesesDormidas = document.getElementById('meses').value;

    function paragraf(text) {
        let paragrafd = document.getElementById('paragrafo');
        paragrafd.textContent = text
    }

    if (mesesDormidas >= 0 && mesesDormidas <= 3 && horasDormidas == 0) {
        paragraf('Durma entre 14 a 17 horas');
    } else if (mesesDormidas >= 4 && mesesDormidas <= 11 && horasDormidas == 0) {
        paragraf('Durma entre 12 a 16 horas');
    } else if (horasDormidas >= 1 && horasDormidas <= 2 && mesesDormidas == 0) {
        paragraf('Durma entre 11 a 14 horas');
    } else if (horasDormidas >= 3 && horasDormidas <= 5 && mesesDormidas == 0) {
        paragraf('Durma entre 10 a 13 horas');
    } else if (horasDormidas >= 6 && horasDormidas <= 13 && mesesDormidas == 0) {
        paragraf('Durma entre 9 a 11 horas');
    } else if (horasDormidas >= 14 && horasDormidas <= 17 && mesesDormidas == 0) {
        paragraf('Durma entre 8 a 10 horas');
    } else if (horasDormidas >= 18 && horasDormidas <= 25 && mesesDormidas == 0) {
        paragraf('Durma entre 7 a 9 horas');
    } else if (horasDormidas >= 26 && horasDormidas <= 64 && mesesDormidas == 0) {
        paragraf('Durma entre 7 a 9 horas');
    } else if (horasDormidas >= 65 && horasDormidas <= 150 && mesesDormidas == 0) {
        paragraf('Durma entre 7 a 8 horas');
    } else {
        paragraf('Insira uma idade!');
    }

}
