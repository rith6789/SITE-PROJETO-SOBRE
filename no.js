function voltar() {
    window.location.href = "trato.html";
}
const nome = localStorage.getItem("Aulejo");
document.getElementById("boasVindas").textContent =
`Bem-vindo, ${nome}!`;