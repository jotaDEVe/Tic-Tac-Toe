const tabuleiro = document.querySelectorAll("#gameboard span");
const JogadorDaVez = document.getElementById("turnPlayer");
const supesq = document.getElementById("0.0");
const supmid = document.getElementById("0.1");
const supdir = document.getElementById("0.2");
const midesq = document.getElementById("1.0");
const midmid = document.getElementById("1.1");
const middir = document.getElementById("1.2");
const infesq = document.getElementById("2.0");
const infmid = document.getElementById("2.1");
const infdir = document.getElementById("2.2");

function changeDefault() {
  JogadorDaVez.innerText = document.querySelector("#input1").value;
  tabuleiro.forEach(function (element) {
    element.classList.remove("win");
    element.innerText = "";
    element.addEventListener("click", marcar);
  });
}

let velha;

function winRegionFnc() {
  const winRegion = [];
  if (
    supesq.innerText !== "" &&
    supesq.innerText === supmid.innerText &&
    supesq.innerText === supdir.innerText
  )
    winRegion.push("0.0", "0.1", "0.2");
  if (
    midesq.innerText !== "" &&
    midesq.innerText === midmid.innerText &&
    midesq.innerText === middir.innerText
  )
    winRegion.push("1.0", "1.1", "1.2");
  if (
    infesq.innerText !== "" &&
    infesq.innerText === infmid.innerText &&
    infesq.innerText === infdir.innerText
  )
    winRegion.push("2.0", "2.1", "2.2");
  if (
    supesq.innerText !== "" &&
    supesq.innerText === midesq.innerText &&
    supesq.innerText === infesq.innerText
  )
    winRegion.push("0.0", "1.0", "2.0");
  if (
    midmid.innerText !== "" &&
    supmid.innerText === midmid.innerText &&
    supmid.innerText === infmid.innerText
  )
    winRegion.push("0.1", "1.1", "2.1");
  if (
    middir.innerText !== "" &&
    supdir.innerText === middir.innerText &&
    supdir.innerText === infdir.innerText
  )
    winRegion.push("0.2", "1.2", "2.2");
  if (
    supdir.innerText !== "" &&
    supdir.innerText === midmid.innerText &&
    supdir.innerText === infesq.innerText
  )
    winRegion.push("0.2", "1.1", "2.0");
  if (
    infdir.innerText !== "" &&
    supesq.innerText === midmid.innerText &&
    supesq.innerText === infdir.innerText
  )
    winRegion.push("0.0", "1.1", "2.2");
  if (
    supesq.innerText !== "" &&
    midesq.innerText !== "" &&
    infesq.innerText !== "" &&
    supmid.innerText !== "" &&
    midmid.innerText !== "" &&
    infmid.innerText !== "" &&
    supdir.innerText !== "" &&
    middir.innerText !== "" &&
    infdir.innerText !== ""
  )
    document.getElementById("vez").innerText = "VELHA!";

  if (winRegion.length === 3) {
    console.log("O JOGO ACABOU!");
  }

  let posicao1Win = winRegion[0];
  let posicao2Win = winRegion[1];
  let posicao3Win = winRegion[2];

  console.log(winRegion);

  document.getElementById(posicao1Win).classList.add("win");
  document.getElementById(posicao2Win).classList.add("win");
  document.getElementById(posicao3Win).classList.add("win");

  if (document.getElementById(posicao1Win).innerText === "x") {
    document.getElementById("vez").innerText =
      "O vencedor foi: " + document.getElementById("input1").value;
  } else if (document.getElementById(posicao1Win).innerText === "o") {
    document.getElementById("vez").innerText =
      "O vencedor foi: " + document.getElementById("input2").value;
  }
}

function disableRegion(el) {
  el.style.cursor = "default";
  el.removeEventListener("click", marcar);
}

function marcar(ev) {
  if (JogadorDaVez.innerText === document.querySelector("#input1").value) {
    ev.currentTarget.innerText = "x";
    JogadorDaVez.innerText = document.querySelector("#input2").value;
  } else {
    ev.currentTarget.innerText = "o";
    JogadorDaVez.innerText = document.querySelector("#input1").value;
  }
  disableRegion(ev.currentTarget);
  const winRegionsVar = winRegionFnc();
}
