const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Obrigado por visitar nosso projeto!";
});
