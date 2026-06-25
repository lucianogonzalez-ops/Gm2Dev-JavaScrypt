const original = { nombre: "Mbappé", goles: 5 };
//const copia = original;
//console.log(original.goles) 
//console.log(copia.goles)
//al estar en la misma instancia , se sobreescriben los datos

//console.log(original === copia)
//da true , por lo mismo dicho anteriormente , como que pertenence a la misma instancia por lo cual son iguales

const copia = { ...original }
copia.goles=99

console.log(original.goles) 
console.log(copia.goles)

//al utilizar spreed creamos un nuevo objeto pero con los mismos valores que la original


