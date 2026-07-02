//Parte A — El bucle roto
//Mirá este código. Antes de correrlo, respondé estas dos preguntas en papel:

//¿Qué valor tiene i después de que termina el bucle? ¿O da error?
//¿Por qué?

// Código para analizar
for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // // da 3, ya que el bucle termina cuando i es igual a 3, y como var tiene alcance global, se puede acceder a su valor fuera del bucle

//Parte B — Arreglarlo con let
//Reemplazá var por let y volvé a correr el código:

for (let a = 0; a < 3; a++) {
  console.log("Botón " + a + " creado");
}
//console.log("i después del bucle:", a); // da error, ya que let tiene alcance de bloque, y no se puede acceder a su valor fuera del bucle

//Parte C — const para lo que no cambia
//Reescribí este bloque usando const para las variables que no cambian y let solo para las que sí cambian:

//var saludo = "Hola";
//var nombre = "Valentina";
//var intentos = 0;

//intentos = intentos + 1;
//intentos = intentos + 1;

//console.log(saludo + ", " + nombre + ". Intentos: " + intentos);

const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);


