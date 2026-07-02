const jugador = {
    nombre: "Lionel Messi",
    pais: "Argentina",
    goles: 8,
}

const texto = JSON.stringify(jugador);
console.log(texto);
console.log(typeof texto); 

console.log(texto.nombre); // da undefined porque texto es un string, no un objeto

const objeto = JSON.parse(texto); // ahora si podria leer lo que quiera ya que si es un objeto
console.log(objeto.nombre);
console.log(typeof objeto);