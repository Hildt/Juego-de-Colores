var colores = ['blue','yellow','orange','red','green','brown','pink','black','white'];
var num = [1, 5, 6];

// GENERA UN COLOR RANDOM
var titular = colores[Math.floor(Math.random() * colores.length)]

// GENERA UN COLOR ALEATORIO SIN REPETIRSE ENTRE SI
// Crear copia del array

var copia = colores;

// LO EXPRESA EN EL TITULO
document.querySelector('h1').innerHTML = titular;

for(var i = 1; i <= 9; i++) {
    // Obtener color
    index = Math.floor(Math.random() * copia.length);
    // Asignar color
    document.getElementById('cuadro' + i).style.backgroundColor = copia[index];
    // Eliminar del array para que no se repita
    copia.splice(index, 1);
    }

///////////

// COMPARA LOS COLORES DEL TITULO Y DEL CUADRADO
function compara (cuadrito) {

    if (document.getElementById(cuadrito).style.backgroundColor == titular) {
            alert("Ganaste!")
    } else {
            alert("Perdiste!")
        }
}

// BOTON EASY
function botonEasy () {

    var colores = ['blue','yellow','orange','red','green','brown','pink','black','white'];

    // GENERA UN COLOR RANDOM
    var titular = colores[Math.floor(Math.random() * colores.length)]

    var copia = colores;

    document.querySelector('h1').innerHTML = titular;

    for(var i = 1; i <= 3; i++) {
    // Obtener color
    index = Math.floor(Math.random() * copia.length);
    // Asignar color
    document.getElementById('cuadro' + i).style.backgroundColor = copia[index];
    // Eliminar del array para que no se repita
    copia.splice(index, 1);
    }

    for(var x = 4; x <= 9; x++) {
        document.getElementById("cuadro" + x).style.display = 'none';
    }

    document.getElementById('cuadro1').style.width = "170px";
    document.getElementById('cuadro1').style.height = "180px";

    document.getElementById('cuadro2').style.width = "170px";
    document.getElementById('cuadro2').style.height = "180px";

    document.getElementById('cuadro3').style.width = "170px";
    document.getElementById('cuadro3').style.height = "180px";

}

// BOTON HARD
function botonHard () {
    for(var x = 4; x <= 9; x++) {
        document.getElementById("cuadro" + x).style.display = 'inline';
    }

    document.getElementById('cuadro1').style.width = "110px";
    document.getElementById('cuadro1').style.height = "110px";

    document.getElementById('cuadro2').style.width = "110px";
    document.getElementById('cuadro2').style.height = "110px";

    document.getElementById('cuadro3').style.width = "110px";
    document.getElementById('cuadro3').style.height = "110px";


}

// BOTON NEW COLORS

console.log (...num);