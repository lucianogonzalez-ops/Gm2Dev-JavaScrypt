const jugador = {
  nombre: "Mbappé",
  goles: 5,
  pais: "Francia",
};

const jugadorActualizado={...jugador}
jugadorActualizado.goles=9

console.log(jugadorActualizado.goles)

//Parte B


const extra = { club: "Real Madrid", camiseta: 9 };
const jugadorActualizado2={...jugador , ...extra}
console.log(jugadorActualizado2)



//Predecí antes de correr: ¿cuánto vale goles en el resultado de { ...jugador, goles: 100, ...extra } si extra también trajera goles: 7? Después comprobalo agregando goles: 7 a extra.
//"Gana la ultima" , ya que lo que nosotros ponemos como gole:100 , se pondria en caso de que nuestro extra no tenga goles, en caso de que sean claves repetidas , se respeta la que esta al final.
 