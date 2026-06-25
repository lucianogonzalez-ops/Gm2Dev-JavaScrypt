
for (let index = 1; index <= 10; index++) {
    console.log(index)
}
console.log(`--------`)
console.log(`Parte B`)
console.log(`--------`)
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0 && i != 0) {
        console.log(i)
    }
}

//el primero for , simplemente recorre del 1 al 10 y lo mustra con un console.log
//el segundo array recorre del 1 al 10 y por cada recorrido que hace calcula con un if si el numero es par , si se cumple la condicion, se muestra en pantalla