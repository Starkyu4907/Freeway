let Estrada;
let Pontos = 0;
let SomColidiu;
let SomPontos;
let SomTrilha;

function preload(){
  Estrada  =  loadImage("imagens/estrada.png");
  Ator   =  loadImage("imagens/ator-1.png");
  Carro  =  loadImage("imagens/carro-1.png")
  Carro2 =  loadImage("imagens/carro-2.png")
  Carro3 =  loadImage("imagens/carro-3.png")
  SomColidiu = loadSound ("sons/colidiu.mp3")
  SomPontos = loadSound ("sons/pontos.wav")
  SomTrilha = loadSound ("sons/trilha.mp3")

  imagemCarros = [Carro, Carro2, Carro3, Carro2, Carro3, Carro]
  
  

    
    
 
    }
  function Placar(){
    textSize(25)
    text(Pontos, width/5, 27)
    fill(color(255,170,10))
  
  
  }