const nomeFaixa = document.getElementById("faixa");
const audio = document.getElementById("musica");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximaFaixa = document.getElementById("proximo");
const botaoFaixaAnterior = document.getElementById("anterior");

const totalFaixas = 6;
let taTocando = false;
let faixa = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function faixaAnterior() {
    if (faixa === 1) {
      faixa = totalFaixas;
    } else {
      faixa -= 1;
    }
    audio.src = "music/vultures/" + faixa + ".mp3";
    nomeFaixa.innerText = "Track " + faixa;
    tocarFaixa();
  }

  function proximaFaixa() {
    if (faixa < totalFaixas) {
      faixa += 1;
    } else {
      faixa = 1;
    }
    audio.src = "music/vultures/" + faixa + ".mp3";
    nomeFaixa.innerText = "Track " + faixa;
    tocarFaixa();
  }


  botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
  botaoFaixaAnterior.addEventListener("click", faixaAnterior);
  botaoProximaFaixa.addEventListener("click", proximaFaixa);
  audio.addEventListener("ended", proximaFaixa);
