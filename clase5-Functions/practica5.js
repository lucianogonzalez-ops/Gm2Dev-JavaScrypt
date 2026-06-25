function calcular() {
  const resultado = 10 * 2;
  return resultado;
}

console.log(calcular());     // ???
//console.log(resultado);      // Esta linea no funciona , ya que la const resultado esta solamente dentro de calcular, por lo cual no podemos accederla

function puntajefinal(){
    let puntos = 0
    function sumar (n){
        puntos = puntos + n; 
    }
    sumar(5) ,sumar(3) ,sumar(2)
    return puntos
}
console.log(puntajefinal())


function exterior() {
  const a = 1;
  function interior() {
    const b = 2;
    return a + b;
  }
  return interior();
}

exterior();   // los scopes en funciones anidadas son ascendentes , entonces la funcion interior al no encontrar a , la busca "subiendo en la funcion"  
// exterior va a devolver 3 , pero como dije , interior va a poder ver la variable a , mientras que exterior no va a poder ver el valor b