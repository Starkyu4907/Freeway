let Ator
let xAtor = 100
let yAtor = 370 
let colisao = false


    function MostraAtor(){    
      image(Ator, xAtor, yAtor, 40, 30)     
}
    
    function MovimentaAtor(){
      if (keyIsDown(UP_ARROW))
        yAtor -= 4
      if(keyIsDown(DOWN_ARROW))
        if(podesemover())
          
        
        yAtor += 4
    }

  

      function VerificaColisao(){
       //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
        for(let i = 0; i < imagemCarros.length; i++){
          colisao = collideRectCircle(xCarros[i], yCarros[i], ComprimentoCarro, AlturaCarro, xAtor, yAtor, 15)
          
          if(colisao){
           yAtor = 370
            SomColidiu.play();
            
          }
          if (yAtor < 5){
            yAtor = 370
          }
            if(colisao){
            Pontos = 0
  }
          

        }
        
           
      }
function Marcaponto(){
  
  if (yAtor < 10){
    Pontos +=1
    SomPontos.play()
  
  }
    
}

function Perdeponto(){
  
  if(colisao){
    Pontos = 0
  }
}
function podesemover(){
  return yAtor < 370
}

    
    
  
  
