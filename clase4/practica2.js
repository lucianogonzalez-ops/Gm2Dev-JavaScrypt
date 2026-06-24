const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];
let posicion = 1
for (const seleccion of selecciones) {
    console.log(`${posicion},${seleccion}`)
    posicion++
}
console.log(`--------`)
console.log(`Parte B`)
console.log(`--------`)
for (let i = 0; i < selecciones.length; i++) {
    const seleccion = selecciones[i];
    console.log(`${i+1},${seleccion}`)
}

// ¿Cuándo conviene usar for con índice?
// Puede convenir el usar un for con indice cuando queremos utilizar el indice , por ejemplo yo lo utilice para hacer el conteo sin usar nada mas qeu el indice

// ¿Cuándo conviene usar for...of?
// Creo que conviene cuando simplemente queremos mostrar los elementos de la lista , por ejemplo yo quiero mostrar las seleccions , no se cuantas hay , ni me interesa tampoco.