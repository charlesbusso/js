function relogio(){
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hr < 10){
        hr = "0" + hr;
    }else if (min < 10){
        min =  "0" + min;
    } else if( seg < 10){
        seg = "0" + seg;

    }
        
    
    let horas = hr +":" + min + ":" + seg;
    document.getElementById('rel').value = horas;
}
let tempo = setInterval(relogio, 1000);