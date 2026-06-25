function precioConIva(precio) {
  console.log(precio * 1.21);
  return precio*1.21
}

const total = precioConIva(100);
console.log(`El total es ${total}`);   // hoy imprime "El total es undefined"