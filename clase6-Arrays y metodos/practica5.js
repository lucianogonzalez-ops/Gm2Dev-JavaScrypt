const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];





const goleadores =grupo.filter((j => j.goles > 3 ))

const ordenados = goleadores.sort((a,b)=> b.goles - a.goles).map (j=> { return `${j.nombre} - ${j.goles} Goles`})

console.log(ordenados)

ordenados.forEach((jugador , i )=> {
  console.log(`${i + 1}. ${jugador}`);
});

const asistidor = grupo.sort((a,b)=> b.asistencias-a.asistencias).map(j=>{return`asistidor silencioso: ${j.nombre}  :(${j.asistencias}- Asistencias , ${j.goles}- Goles)`})[0]
console.log(asistidor)