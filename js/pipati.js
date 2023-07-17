alert("Bienvenido al juego de Piedra Papel o Tijeras");
alert("empiezas tú");
var valorJugador = prompt("Elige 'piedra', 'papel' o 'tijera'",);
var juego = prompt("elige 'ganar' o 'perder'",);
var mensaje = "Elige una opción valida";
if (juego === "perder") {
    //este es el condicional de para que gane el usuario 
    if (valorJugador == "piedra") {
        document.write("<div id='container'><h1>Pierdes porque yo saco: <br> papel</h1></div>");
    } else if (valorJugador === "papel") {
        document.write("<div id='container'><h1>Pierdes porque yo saco: <br> tijeras</h1></div>");
    } else if (valorJugador === "tijeras") {
        document.write("<div id='container'><h1>Pierdes porque yo saco: <br> piedra</h1></div>");
    } else {
        alert(mensaje);
    };
} else if(juego == "ganar"){
    //este es el condicional de para que gane la maquina 
    if (valorJugador === "piedra") {
        document.write("<div id='container'><h1>Ganas porque yo he sacado: <br> tijeras</h1></div>");
    } else if (valorJugador === "papel") {
        document.write("<div id='container'><h1>Ganas porque yo he sacado: <br> piedra</h1></div>");
    } else if (valorJugador === "tijeras") {
        document.write("<div id='container'><h1>Ganas porque yo he sacado: <br> papel</h1></div>");
    } else {
        alert(mensaje);
    };
}else{
    alert(mensaje);
}

