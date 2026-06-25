const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort());

//el metodo sort , al no darle ninguna instruccion va a devolverlos como si los calculara como string , por lo cual va a ver si empeizan con 0 , ninguno ,luego pasa por el 1 , y asi va ordenandolos

console.log(edades.sort((a, b) => a - b)); 
console.log(edades.sort((a, b) => b - a)); 

//al darle estas instrucciones  utilizando bubble sort , los va ordenando

