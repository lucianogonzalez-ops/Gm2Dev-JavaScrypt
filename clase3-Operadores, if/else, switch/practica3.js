1 == "1" //true
1 === "1" //false

true == 1 //true , ya que 1 seria como un ON
true === 1 //false , el triple igual busca mismo valor y tipo

null == undefined  // true el doble igual los convierte en iguales 
null === undefined //false , no son ni el mismo valor y tipo

"" == 0 // true , es un falsye
"" === 0 //false , triple igual

" " == 0 //false , no es un falsye y por consecuente es un truethy

const ingresado = "100";  

if (ingresado == 100) { //cambie el triple igual por dos iguales.
console.log("Correcto");
} else {
  console.log("Incorrecto");   
}

