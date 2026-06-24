let final=false
const numeroSecreto = 7;
const intentos = [3, 9, 1, 7, 5]; // el jugador "intenta" estos números en orden

while (!final) {
    for (let i = 0; i < intentos.length; i++) {
        const numeroElegido=intentos[i]
        if (numeroElegido === numeroSecreto) {
            console.log(`ADIVINASTE EN ${i+1} INTENTOS , EL NUMERO ERA ${numeroSecreto}`)
            final=true;
            break
        } else if(numeroElegido > numeroSecreto ){
            console.log(`Intento ${i+1} : ${numeroElegido} Muy alto`)
        }   else{
                console.log(`Intento ${i+1} : ${numeroElegido} Muy bajo`)
        }
}
    if (!final){console.log(`FALLASTE CON ${intentos.length} INTENTOS
        ,EL NUMERO ERA ${numeroSecreto}`)
        break
    }
}

//utilizo un while !final , este while existe mientras final sea false , luego adentro del hile un for que recorre la lista "intentos[]" hasta su longitud
//luego con cada step que haga , guarda el numero en una variable , esta variable luego es comparada y en base a ifs muestra en la terminal un mensaje distinto
// si se llegue al ultimo numero , muestra un el numero de intentos con un mensaje de fallaste