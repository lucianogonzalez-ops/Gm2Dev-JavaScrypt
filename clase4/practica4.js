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