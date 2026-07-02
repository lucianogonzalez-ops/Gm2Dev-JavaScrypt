const roto1 = "{'nombre': 'Messi', 'goles': 8}";  // JSON.parse(roto1)  // Esto da error porque las comillas simples no son válidas en JSON
const roto2 = '{nombre: "Messi", goles: 8}'; // JSON.parse(roto2)  // Esto da error porque las claves deben ir entre comillas dobles
const roto3 = '{"nombre": "Messi", "goles": 8,}'; // JSON.parse(roto3)  // Esto da error porque hay una coma extra al final 

const arreglado = '{"nombre": "Messi", "goles": 8}'; 
const corregido =JSON.parse(arreglado);  
console.log(corregido.nombre)