

function cor1(){
    let obj = document.getElementById('div1');
    obj.style.backgroundColor = '#fff';
}
function cor2(){
    let obj = document.getElementById('div1');
    obj.style.backgroundColor = '#f00';
}

let px = 0;
let py = 0;

function addEventos(){
  let obj = document.getElementById('div1');
  obj.addEventListener('click',msg);
  obj.addEventListener('mouseover', cor1);
  obj.addEventListener('mouseout', cor2);
}
function move(){
    let obj = document.getElementById('div1');
    let tecla = event.keyCode;
    // 13 = enter
    // 37 = esquerda
    // 38 = cima
    // 39 = direita
    // 40 = baixo

    if(tecla == 37){
      px-=50;
      obj.style.left = px + "px";
    }else if(tecla == 38){
        py-=50;
        obj.style.top = py + "px";
    }else if(tecla == 39){
        px+=50;
        obj.style.left = px + "px";
       }else if(tecla == 40){
        py+=50;
        obj.style.top = py + "px";
    }else if(tecla == 13){
        obj.style.backgroundColor = '#fff'
        document.removeEventListener('keydown', move);
    }
}
function addClique(){
    document.addEventListener("keydown", move);
    obj.style.backgroundColor = '#f00';
}
function iniciar(){
    obj = document.getElementById('div1');
    obj.addEventListener('click', addClique);
}
window.addEventListener('load', iniciar);

function mudarCor(){
    let obj = document.getElementById('div1');
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    obj.style.backgroundColor = "rgb("+ r +", "+ g +", "+ b +")"

}
mudarCor();
window.addEventListener("load, mudarCor")