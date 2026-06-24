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