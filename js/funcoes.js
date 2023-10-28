(function () {
    const cnv = document.querySelector('#canvas');
    const ctx = cnv.getContext('2d');
  
    const robo1 = { x: 20, y: 30, largura: 50, altura: 50, vida:100 };
    const robo2 = { x: 930, y: 430, largura: 50, altura: 50, vida:100 };
  
    let colisoes = 0;
  
    // velocidade do robo
    const velocidade = 6; 
    let direcaoRobo1 = { x: 0, y: 0 };
    let direcaoRobo2 = { x: 0, y: 0 };

function moverRobos() {

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'w':
                direcaoRobo1.y = -1;
                break;
            case 'a':
                direcaoRobo1.x = -1;
                break;
            case 's':
                direcaoRobo1.y = 1;
                break;
            case 'd':
                direcaoRobo1.x = 1;
                break;
            case 'ArrowUp':
                direcaoRobo2.y = -1;
                break;
            case 'ArrowLeft':
                direcaoRobo2.x = -1;
                break;
            case 'ArrowDown':
                direcaoRobo2.y = 1;
                break;
            case 'ArrowRight':
                direcaoRobo2.x = 1;
                break;
        }
    });
    
    document.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'w':
            case 's':
                direcaoRobo1.y = 0;
                break;
            case 'a':
            case 'd':
                direcaoRobo1.x = 0;
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                direcaoRobo2.y = 0;
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                direcaoRobo2.x = 0;
                break;
        }
    });

    if (robo1.x + direcaoRobo1.x * velocidade >= 0 && robo1.x + direcaoRobo1.x * velocidade <= canvas.width - robo1.largura) {
        robo1.x += direcaoRobo1.x * velocidade;
    }
    if (robo1.y + direcaoRobo1.y * velocidade >= 0 && robo1.y + direcaoRobo1.y * velocidade <= canvas.height - robo1.altura) {
        robo1.y += direcaoRobo1.y * velocidade;
    }

    if (robo2.x + direcaoRobo2.x * velocidade >= 0 && robo2.x + direcaoRobo2.x * velocidade <= canvas.width - robo2.largura) {
        robo2.x += direcaoRobo2.x * velocidade;
    }
    if (robo2.y + direcaoRobo2.y * velocidade >= 0 && robo2.y + direcaoRobo2.y * velocidade <= canvas.height - robo2.altura) {
        robo2.y += direcaoRobo2.y * velocidade;
    }

    //Verifica colisão entre os robôs
    if (robo1.x < robo2.x + robo2.largura &&
        robo1.x + robo1.largura > robo2.x &&
        robo1.y < robo2.y + robo2.altura &&
        robo1.y + robo1.altura > robo2.y) {
      
        const danoRobo1 = Math.floor(Math.random() * 20) + 1; 
        const danoRobo2 = Math.floor(Math.random() * 20) + 1; 
        robo1.vida -= danoRobo1;
        robo2.vida -= danoRobo2;
      
        colisoes++;
 
        //após a colisão os robos voltam para a posição inicial
        robo1.x = 20;
        robo1.y = 30;
        robo2.x = 930;
        robo2.y = 430;

        if (colisoes >= 5) {
          if (robo1.vida > robo2.vida) {
            alert('O Robô 1 é o vencedor!');
          } else if (robo2.vida > robo1.vida) {
            alert('O Roboô 2 é o vencedor!');
          } else {
            alert('Empate!');
          }
          alert('Precione "F5" para reiniciar o jogo.')
          return;
        }

   
}
    // atualiza os robôs com as imagens
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(robo1Image, robo1.x, robo1.y, robo1.largura, robo1.altura);
    ctx.drawImage(robo2Image, robo2.x, robo2.y, robo2.largura, robo2.altura);

    // Exibe a vida dos robôs no canvas
    ctx.fillStyle = 'black';
    ctx.fillText('Robo 1 Vida: ' + robo1.vida + '%', 10, 20);
    ctx.fillText('Robo 2 Vida: ' + robo2.vida + '%', 900, 20);

    window.requestAnimationFrame(moverRobos);
}

moverRobos();

}());

