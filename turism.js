function entrar() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "Azulejo" && senha === "6767") {

        alert("Login realizado com sucesso!");

        window.location.href = "inicialpag.html";

    } else {

        alert("Usuário ou senha incorretos!");

    }

}

function sair(){

    let resposta = confirm("Deseja realmente sair?");

    if(resposta){

        window.location.href = "login.html";

    }

}
function voltar() {

    window.location.href = "inicialpag.html";
}
function abrirLugar1() {
    window.location.href = "igreja.html";
}
function abrirLugar2() {
    window.location.href = "caldeirao.html";
}
function abrirLugar3() {
    window.location.href = "cachoeira.html";
}
function abrirLugar4() {
    window.location.href = "museu.html";
}

function voltarbilo () {
    window.location.href = "inicialpag.html";
}