for (let i = 0; i <= 30 ; i++) {
    if (i%5 ===0 && i%3===0) {
        console.log(`GOLAZO`)
    }else if(i%5 === 0){
        console.log(`PENAL`)
    }else if(i%3 === 0){
        console.log(`GOL`)
    }
    else{
        console.log(i)
    }
}

// Utilizo un for para que recorra los numeros del 1 al 30 , luego un if para definir condiciones a la hora de mostrar un mensaje en la terminal