const equipos = [
{ nombre: "Argentina", puntos: 9 },
{ nombre: "Polonia",   puntos: 4 },
{ nombre: "México",    puntos: 4 },
{ nombre: "Arabia",    puntos: 10 },
];
let posicion = 1
let liderPuntos = 0
let pasanGrupos = 0
let lider =""

for (const seleccion of equipos) {
    console.log(`${posicion}. ${seleccion.nombre} - ${seleccion.puntos} Puntos`)
    posicion++
    if (liderPuntos < seleccion.puntos) {
        lider = seleccion.nombre
        liderPuntos= seleccion.puntos
    }
    if (seleccion.puntos > 3 ){
        pasanGrupos++
    }
}
console.log(`${lider}:con ${liderPuntos} puntos. Clasifican: ${pasanGrupos} equipos.`)

//primero declaro las variables que usare mas adelante
//luego con un for .. of. , recorro todo el array
//luego por cada recorrido del array , muestro los object de adentro y a su vez guardo al lider de puntos y cuantos tienen mas de 3 puntos
// al final de todo muestro un resumen de lo guardado
