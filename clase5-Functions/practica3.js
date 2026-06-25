
function saludar(nombre,idioma = "es"){
    const saludos ={
        es: `Hola, ${nombre}`,
        en: `Hello, ${nombre}`
    }
    return saludos[idioma]  ||  saludos.es
}
console.log(saludar("Ana"));          // "Hola, Ana"
console.log(saludar("Ana","es"));          // "Hola, Ana"
console.log(saludar("Ana","en"));          // "Hola, Ana"


//PARTE C



function precioFinal(precio,descuento = 0){
    return precio*(100-descuento)/100
}

console.log(precioFinal(1000));       // 1000
console.log(precioFinal(1000, 10));   // 900
console.log(precioFinal(1000, 25));   // 750