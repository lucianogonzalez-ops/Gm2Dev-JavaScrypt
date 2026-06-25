
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


