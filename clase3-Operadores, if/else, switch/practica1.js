

//Parte A — Aritmética y coerción

7 % 2. //El resultado es 1 , % nos da el resto de la division
10 % 5 //Aca seria 0
2 ** 4 // ** significa potencia , nos daria 32
"5" + 1 // aca nos daria "51" ya que el + suma el 1 como si fuera un string 
"5" - 1 // por otra parte aca seria 4 , ya que el - no tiene la misma caracteristica que el + , este no suma strings
5 + "1" // 51
"5" * "2" //este nos daria 10 , ya que la multiplicacion tambien sirve para strings , si usamos lolo*3 nos daria lololololo

//Parte B — Comparaciones
5 === 5 //false , el tener 3 iguales , busca el mismo valor y tipo
5 === "5" // false 
5 == "5" // true , al tener dos iguales , este busca el valor y convierte el string en numero
0 == false // true , el 0 es un falsye
0 === false // false
"" == false // true , es un falsye
3 !== "3" // true , al tener dos iguales verifica valor y tipo


//Parte C — Par o impar
const n1 = 7;
const resultado = n1 % 2 ===0 ? true : false;
console.log(resultado);