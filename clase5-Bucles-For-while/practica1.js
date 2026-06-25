const areaRectangulo = function(a,b){
    return a*b
}

const devuelveMayor= function(edad){
    return edad >= 18 ? true : false;
}

const nombreCompleto =function(nombre,apellido){
    return (`${nombre},${apellido}`)
}

console.log(areaRectangulo(5,6))
console.log(areaRectangulo(4,4))
console.log(devuelveMayor(18))
console.log(devuelveMayor(15))
console.log(nombreCompleto("alan","gonzalez"))
console.log(nombreCompleto("alan","maximiliano"))