const dia = 7

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
        default:
            console.log("Dia Invalido")
        break;
}

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Hay entrenamiento")
        break
    case 6:
    case 7:
        console.log("No hay entrenamiento")
        break;
        default:
            console.log("Dia Invalido")
        break;
}


const dia = 2;

switch (dia) {
  case 2:
    console.log("Martes");
  case 3:   //el error esta aca , no tiene un break , ocasionando un fallthrough
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}