document.getElementById("player").addEventListener("click", sumarPuntos);
let necesarios = 30;
var puntos = 0;
var tiempo = 60;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    let randNum = Math.round(Math.random()*460);
    let randNum2 = Math.round(Math.random()*320);
    document.getElementById("player").style.margin = randNum + "px"
    document.getElementById("player").style.margin = randNum2 + "px"
    if(puntos == 30) {
        alert('Ganaste'); 
        tiempo = 60;
        puntos = 0;
    }
}


function restarTiempo () {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " +  tiempo;
    if (tiempo == 0) {
        alert('Perdiste master');
        tiempo = 60;
        puntos = 0;
        
    }
}

setInterval(restarTiempo, 1000);
