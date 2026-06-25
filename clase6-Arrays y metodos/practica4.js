const jugadores = [
  { nombre: "Messi",       goles: 8,  pais: "Argentina"  },
  { nombre: "Mbappé",      goles: 5,  pais: "Francia"    },
  { nombre: "Haaland",     goles: 12, pais: "Noruega"    },
  { nombre: "Benzema",     goles: 0,  pais: "Francia"    },
  { nombre: "Lewandowski", goles: 3,  pais: "Polonia"    },
  { nombre: "Kane",        goles: 2,  pais: "Inglaterra" },
  { nombre: "Neymar",      goles: 1,  pais: "Brasil"     },
  { nombre: "Müller",      goles: 0,  pais: "Alemania"   },
];



const ranking = jugadores.filter(j=> j.goles >=1).sort((a,b)=>b.goles-a.goles).map( j=> { return `${j.nombre} - ${j.goles}`})
console.log(ranking)