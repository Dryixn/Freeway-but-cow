//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -= 3
  }
  if(keyIsDown(83)){
    if (podeSeMover()){
      yAtor += 3
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comCarro, altCarro, xAtor, yAtor, 15);
    if (colisao){
      VoltaAtorParaPosicaoInicial();
      somColisao.play()
      if (pontosMaiorQueZero()){
        meusPontos -= 1
      }
    }
  }
}


function VoltaAtorParaPosicaoInicial(){
  yAtor = 366;
}


function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}


function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play()
    VoltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}







