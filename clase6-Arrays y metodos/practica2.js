const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];


const jugadoresFiltrados= jugadores.filter(j => j.goles > 2)
console.log(jugadoresFiltrados)

const soloJugadores = jugadores.map(j => j.nombre)
console.log(soloJugadores)

const arrayFiltrado=jugadores
      .filter(j => j.goles > 2)
      .map(j => j.nombre)
console.log(arrayFiltrado)

const primero=jugadores.find(j => j.pais === "Francia")
console.log(primero)

