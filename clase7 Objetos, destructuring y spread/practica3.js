const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};

const podio = ["Argentina", "Francia", "Croacia"];

const { nombre, goles } = jugador;

console.log(nombre,goles)

//Parte B


const jugador2 = {
  nombre: "Messi",
  pais: "Noruega",
  goles: 12,
};

const{nombre:nombreJugador}=jugador2
const { camiseta = 9 } =jugador;

console.log(nombreJugador)
console.log(camiseta)

const [oro, plata, bronce] = podio;

console.log(oro)


