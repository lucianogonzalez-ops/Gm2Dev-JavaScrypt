

//Parte A — Predecir antes de ejecutar
//Para cada línea, anotá en papel qué creés que va a devolver antes de correrla en la consola. Después ejecutala y comparala con tu predicción:
typeof "Rosario" // da string, ya que esta entre comillas
typeof 42 // da number
typeof 3.14 // da number
typeof true // da boolean
typeof false // da boolean
typeof undefined // da undefined
typeof null // da object, ya que es un objeto nulo


//Parte B — Declarar y verificar
//Declaré estas variables y usá typeof para confirmar el tipo de cada una:

const ciudad    = "Mendoza"; 
const habitantes = 115000;
const esCap     = false;
const apodo     = null;
let fundacion;           // sin asignar

console.log(typeof ciudad);
console.log(typeof habitantes);
console.log(typeof esCap);
console.log(typeof apodo);
console.log(typeof fundacion); // da undefined, ya que no tiene valor asignado

//Parte C — La pregunta trampa
//Mirá este código. Antes de ejecutarlo, respondé: ¿qué creés que imprime la última línea? 
const nada = null;
console.log(typeof nada); // da object, ya que es un objeto nulo 