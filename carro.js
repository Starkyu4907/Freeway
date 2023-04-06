  let xCarros = [600,600,600,600,600,600];
  let yCarros = [35, 92, 144,205,260,312];
  let VelocidadeCarros = [2.6, 3.5, 5,4,6,2];
  let ComprimentoCarro = 70;
  let AlturaCarro = 50;

  //carro 1 (SEM LISTA)
  //let xCarro = 600;
  //let yCarro = 35;
  //let VelocidadeCarro = 2;

  //carro 2 (SEM LISTA)
  //let xCarro2= 600;
  //let yCarro2 = 92;
  //let VelocidadeCarro2 = 5;

  //carro 3 (SEM LISTA)
  //let xCarro3 = 600;
  //let yCarro3 = 144;
  //let VelocidadeCarro3 = 3.5;


  function MostraCarro(){
    for(let i = 0;i < imagemCarros.length; i++){
    
      image(imagemCarros[i], xCarros[i], yCarros[i], ComprimentoCarro, AlturaCarro);
     // image(imagemCarros[i], xCarros[i], yCarros[i], 70, 50);
     // image(imagemCarros[i],xCarros[i], yCarros[i], 70, 50);
      }
  }

  function MovimentaCarro(){
    for (let i = 0; i<imagemCarros.length; i++) {
      xCarros[i] -= VelocidadeCarros[i];

      }
  }
  function VoltaCarro(){
    
    for (let i = 0; i<imagemCarros.length; i++){

    if (PassouTodaTela(xCarros[i])){
      xCarros[i] = 600;
      }
      

      }
    function PassouTodaTela(xCarros){
      return xCarros < -63;
      
      }
    
    
  }
