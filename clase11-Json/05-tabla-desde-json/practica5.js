const datosJSON = `[
  { "equipo": "Argentina", "ganados": 2, "empatados": 1, "perdidos": 0 },
  { "equipo": "México",    "ganados": 1, "empatados": 1, "perdidos": 1 },
  { "equipo": "Polonia",   "ganados": 0, "empatados": 2, "perdidos": 1 },
  { "equipo": "Arabia",    "ganados": 1, "empatados": 0, "perdidos": 2 }
]`;


const datos = JSON.parse(datosJSON);

const tablaNueva=datos.map((equipo) => ({
    equipo: equipo.equipo,
    puntos: equipo.ganados*3 + equipo.empatados*1
}))

console.log(tablaNueva)
const tablaOrdenada=[...tablaNueva]
.sort((a,b)=>a-b)
console.log(tablaOrdenada)

tablaOrdenada.forEach((element , i ) => { console.log(`${i+1} - ${element.equipo} ${element.puntos}  :pts`)});
