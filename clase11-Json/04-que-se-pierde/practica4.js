const partido={
    local:"Argentina",
    visitante:"Brasil",
    jugador:false,
    golesLocal:undefined,
    relatar:()=>"GOLLLL"
}
//lo que pasaria , es que al pasar a string , solo sobreviven los datos como tal , no funciones o undefineds

const datos = JSON.stringify(partido) 
console.log(datos)
const datosParseados=JSON.parse(datos)
console.log(datosParseados)



