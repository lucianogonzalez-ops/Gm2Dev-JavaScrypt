const jugadores = [
  { nombre: "Messi",   goles: 8,  partidos: 7 },
  { nombre: "Mbappé",  goles: 5,  partidos: 6 },
  { nombre: "Haaland", goles: 12, partidos: 6 },
  { nombre: "Kane",    goles: 0,  partidos: 5 },
  { nombre: "Neymar",  goles: 3,  partidos: 7 },
];
const ranking = jugadores.map(jugador => ({...jugador, promedioGoles: Number((jugador.goles / jugador.partidos)).toFixed(2)}));

const rankingFiltrado= ranking.filter(j=>j.goles>0).sort((a,b) => b.goles-a.goles)

console.log(ranking)
console.log(rankingFiltrado)

const rankingStrings=rankingFiltrado.map(({nombre,goles,promedioGoles})=>(`${nombre} - ${goles} Goles (${promedioGoles} por partido)`))
console.log(rankingStrings)