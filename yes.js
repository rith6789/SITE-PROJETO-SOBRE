
function entrar() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario == "Azulejo" && senha == "6767") {
        alert("Login realizado com sucesso!");

        window.location.href = "uou.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}