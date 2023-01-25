let jog;
let vel;
let dx;
let dy;
let px;
let py;
let anima;
let estado;

function inicia(){
    vel = 2;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;
    estado = 1;
    jog = document.getElementById('jogador');
    jog.addEventListener('click', moverParar);
    document.getElementById("btIni").addEventListener('click',mover);
    document.getElementById("btPar").addEventListener('click',parar);
    game();
}
function moverParar(){
    if(estado){
        estado = 0;
        jog.style.backgroundColor = "#f00";
        cancelAnimationFrame(anima);
    }else{
        estado = 1;
        jog.style.backgroundColor = "#00f";
        anima = requestAnimationFrame(game);
    }
}

function mover(){
    if(!estado){
        estado = 1;
        jog.style.backgroundColor = "#00f";
        anima = requestAnimationFrame(game);
    }
}
function parar(){
    
        estado = 0;
        jog.style.backgroundColor = "#f00";
        cancelAnimationFrame(anima);
        
    
}

function game(){
    px += (dx * vel);
    py += (dy * vel);
    jog.style.left = px + "px";
    jog.style.top = py + "px";

    if(px > 800){
       dx = -1;
    }else if(px < 0){
        dx = 1;
    }
    anima = requestAnimationFrame(game);

}
window.addEventListener('load', inicia);
