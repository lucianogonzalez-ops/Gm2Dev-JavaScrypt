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