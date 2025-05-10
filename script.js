let intro = document.getElementById("intro");
let card = document.getElementById("card");
let yes1 = document.getElementById("yes1");
let no1 = document.getElementById("no1");
let yes2 = document.getElementById("yes2");
let no2 = document.getElementById("no2");

// Ao clicar em "Sim" na primeira pergunta, mostra a segunda
yes1.addEventListener("click", function () {
  intro.style.display = "none";
  card.style.display = "block";
});

// Botão "Não" da primeira pergunta foge do mouse pela tela inteira
no1.addEventListener("mouseenter", function () {
  const btnWidth = no1.offsetWidth;
  const btnHeight = no1.offsetHeight;
  const maxLeft = window.innerWidth - btnWidth;
  const maxTop = window.innerHeight - btnHeight;

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  no1.style.position = "fixed";
  no1.style.left = `${left}px`;
  no1.style.top = `${top}px`;
});

// Botão "Sim" da segunda pergunta leva para resposta.html
yes2.addEventListener("click", function () {
  window.location.href = "resposta/resposta.html";
});

// Botão "Não" da segunda pergunta pode mostrar uma mensagem ou nada
no2.addEventListener("click", function () {
  alert("Tente de novo!");
});