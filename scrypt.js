
//EJERCICIO 1
const n1 = 7;
const resultado = n1 % 2 ===0 ? true : false;
console.log(resultado);

//EJERCICIO 2

const goles = 15;

if (goles >= 20) {
    console.log("Goleador");
}else if(goles >= 10){
    console.log("habitual");
}else if (goles >= 1) {
    console.log("ocasional");
}else{
    console.log("No convirtio")
}

//EJERCICIO 3

const ingresado = "100";   // simplemente cambie la condicion del iff a = para que convierta el string a int

if (ingresado == 100) {
console.log("Correcto");
} else {
console.log("Incorrecto");
}

const dia = 7

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
        default:
            console.log("Dia Invalido")
        break;
}


switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Hay entrenamiento")
        break
    case 6:
    case 7:
        console.log("No hay entrenamiento")
        break;
        default:
            console.log("Dia Invalido")
        break;
}

//EJERCICIO 5

const precioUnitario = 1500;   // precio de una entrada, en pesos
const cantidad = 5;            // cuántas entradas compra
const esSocio = true;          // ¿es socio del club?

let subtotal= precioUnitario*cantidad

if (cantidad >=4) {
    subtotal = subtotal * 0.9
}
if (esSocio) {
    subtotal = subtotal * 0.85
}

console.log(`Total final : ${subtotal}`)

