
function convertidorTemp(c){
    return c*(9/5) + 32
}

function resolvedor(a, b, c, signo){
    let numerador
    if(signo == "pos"){
        numerador = -b + Math.sqrt(b**2 - 4*a*c);
    } else {
        numerador = -b - Math.sqrt(b**2 - 4*a*c);
    }
    return numerador/2*a
}

function mejorParidad(a){
    if(a%2 == 0){
        return "Par"
    }
    return "Impár"
}

function peorParidad(a){
    let paridad0
    let paridad1
    let paridad2
    let paridad3
    let paridad4
    let paridad5
    let paridad6
    let paridad7
    let paridad8
    let paridad9
    let paridad10
    let respuesta

    if(a == 0){
        paridad0 = "par" 
        respuesta = paridad0
    }else if(a == 1){
        paridad1 = "impar" 
        respuesta = paridad1
    }else if(a == 2){
        paridad2 = "par"
        respuesta = paridad2
    } else if(a == 3){
        paridad3 = "impar"
        respuesta = paridad3
    }else if(a == 4){
        paridad4 = "par"
        respuesta = paridad4
    }else if(a == 5){
        paridad5 = "impar"
        respuesta = paridad5
    } else if(a == 6){
        paridad6 = "par"
        respuesta = paridad6
    }else if(a == 7){
        paridad7 = "impar"
        respuesta = paridad7
    }else if(a == 8){
        paridad8 = "par"
        respuesta = paridad8
    }else if(a == 9){
        paridad9 = "impar"
        respuesta = paridad9
    }else if(a == 10){
        paridad10 = "par"
        respuesta = paridad10
    }
    return respuesta
}

console.log(convertidorTemp(-40))

console.log(resolvedor(1, 5, 4, "pos"))

console.log(resolvedor(1, 5, 4, "neg"))

console.log(mejorParidad(10))

console.log(peorParidad(10))


