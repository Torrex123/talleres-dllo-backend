function desglosarString(str, tipo) {
    let cuenta = 0;
    let vocales = "aeiouáéíóúü";

    for (let i = 0; i < str.length; i++) {
        if (tipo === "vocales" && vocales.includes(str[i].toLowerCase())) {
            cuenta++;
        } else if (tipo === "consonantes" && !vocales.includes(str[i].toLowerCase())) {
            cuenta++;
        }
    }
    return cuenta;
}

function twoSum(nums, objetivo) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === objetivo) {
                return [i, j];
            }
        }
    }
    return [];
}

function conversionRomana(str) {
    const romanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let valorPrevio = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        let valorActual = romanos[str[i]] || 0;
        if (valorActual < valorPrevio) {
            total -= valorActual;
        } else {
            total += valorActual;
        }
        valorPrevio = valorActual;
    }
    return total;
}

function descomposicion(str) {
    const partes = str.split(',');
    const palabra = partes[0];
    const diccionario = partes.slice(1);

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
            if (i !== j && diccionario[i] + diccionario[j] === palabra) {
                return [diccionario[i], diccionario[j]];
            }
        }
    }
    return [];
}

console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 2], 6));
console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MCMXCVII"));
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));