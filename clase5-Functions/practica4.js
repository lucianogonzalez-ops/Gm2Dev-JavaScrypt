function cuadrado(n) {
  return n * n;
}


//const cuadrado = (n) => n * n;

function sumar(a, b) {
  return a + b;
}
//const sumar = (n) => n + n;


function inicial(nombre) {
  return nombre[0];
}

//const inicial = (n) => n[0];

//al cambiar todas las functions por arrow functions  , tiene un return implicito



//PARTE B 

const mitad = (n) => n / 2;
const triple = (n) => { n * 3; }; // esta funcion devuelve undefined ya que al ponerle llaves , el return ya no es implicito. De este modo , habria que poner un return para que ya no sea mas undefined
//const triple = (n) => { return n * 3; }; //arrow function arreglada

const iva = (n) => n * 1.21;

console.log(iva(100))