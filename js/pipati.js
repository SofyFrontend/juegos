alert("Bienvenido al juego de Piedra Papel o Tijeras");
alert ("empiezas tú");
var valorJugador = prompt("Elige 'piedra', 'papel' o 'tijera'", );
// var juego = prompt("elige 'ganar' o 'perder'", );
if (valorJugador === "piedra") {
    document.write("<div id='container'><h1>Pierdes porque yo saco: <br> papel</h1></div>");   
} else if (valorJugador === "papel"){
    document.write("<div id='container'><h1>Pierdes porque yo saco: <br> tijeras</h1></div>");
} else {
    document.write("<div id='container'><h1>Pierdes porque yo saco: <br> piedra</h1></div>");
}