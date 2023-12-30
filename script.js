const ball = document.getElementById("ball");
const ballLight = document.getElementById("ballLight");
const base = document.getElementById('base');
const base1 =  document.getElementById("base1")
const scoreDiv = document.getElementById('score');
const botao = document.getElementById("botao")
const scoreP = document.getElementById("scoreP")


const colors = ["red",  "green", "yellow", "blue","purple"];
let nextColorIndex = 0;

const colors1 = ["red", "blue","purple", "green", "yellow"];
let nextColorIndex1 = 0;


let espacoTop = 100;
let score = 0;
let tamanhoTela = window.innerHeight;

let animacaoDuracao = 4;
let reducaoDuracao = 0.035; // Valor de redução de duração

function colisao() {
  

  var posicaoBase1=base1.getBoundingClientRect()
  var base01Top = posicaoBase1.top
  var base01TopFormatado = Math.floor(base01Top)
  



  var posicao = ball.getBoundingClientRect();
  var posicaoAtual = posicao.top;
  var posicaoAtualInt = Math.floor(posicaoAtual)
  
  var colisao = base01TopFormatado-100;
  console.log(colisao,posicaoAtualInt,base01TopFormatado)

  if (colisao == posicaoAtualInt) {
    ball.classList.remove('down');
    ball.classList.add('up');
    console.log("colisao === posicaoAtual")
    animacaoDuracao -= 0.035;

    up = document.querySelector('.up');
    up.style.animationDuration = animacaoDuracao + "s";

    if (base.style.backgroundColor == ball.style.backgroundColor) {
      changeColorBall();
      score++;
      scoreDiv.innerHTML ='<p id="scoreP" class="score">'+ score +'</p>';
      

    } else {
      alert('GAME OVER')

      initGame()

      setTimeout(() => {
        animacaoDuracao = 4;
        up.style.animationDuration = animacaoDuracao + "s";
      }, 0);
      score = 0;
      scoreDiv.innerHTML = score;
      changeColorBall();
      changeColorBase();
    }
  }

  if (posicaoAtualInt === espacoTop) {
    ball.classList.remove('up');
    ball.classList.add('down');
    console.log("posicaoAtual === espacoTop",tamanhoTela,colisao,posicaoAtual)
    
    // Reduz a duração da animação em 0.1s
    animacaoDuracao -= reducaoDuracao;
    if (animacaoDuracao < 1) {
      animacaoDuracao = 1; // Garante que a duração não seja menor que 0.1s
    }


  }
}




// Chama a função para obter a posição inicial da div
colisao();

setInterval(colisao, 400);



function changeColorBall() {
  if (nextColorIndex >= colors.length) {
    shuffleArray(colors);
    nextColorIndex = 0;
  }

  ball.style.backgroundColor = colors[nextColorIndex];
  ball.style.boxShadow='0px 0px 30px '+ colors[nextColorIndex];
  nextColorIndex++;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function changeColorBase() {
  if (nextColorIndex1 >= colors1.length) {
    shuffleArray(colors1);
    nextColorIndex1 = 0;
  }

  base.style.backgroundColor = colors1[nextColorIndex1];
  base.style.boxShadow ='0px 0px 30px '+ colors1[nextColorIndex1];
  base1.style.backgroundColor = colors1[nextColorIndex1];
  base1.style.boxShadow ='0px 0px 30px '+ colors1[nextColorIndex1];
  nextColorIndex1++;
}

// Adicionar evento de clique para a base
botao.addEventListener('touchstart', () => {
  changeColorBase();
});

// Função para inicializar o jogo
function initGame() {
 
  ball.classList.remove("up")
  ball.classList.add('down');


  animacaoDuracao = 4
  score = 0;
  scoreDiv.innerHTML = score;
  changeColorBall();
  changeColorBase();
}




 TelaInicio=document.getElementById("TelaInicio")
 botaoInicio=document.getElementById("jogar")

 botaoInicio.addEventListener('click',()=>{
  TelaInicio.style.display="none"
  initGame()
 })


