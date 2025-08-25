function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function missingNumbers(arr) {
    const min = findMin(arr);
    const max = findMax(arr);
    const missing = [];
    for (let i = min; i <= max; i++) {
        if (!includes(arr, i)) {
            missing.push(i);
        }
    }
    return missing;
}

console.log(findMax([3, 17, -1, 4, -19]));  
console.log(includes([3, 17, -1, 4, -19], 2));  
console.log(includes([3, 17, -1, 4, -19], 4));  
console.log(sum([3, 17, -1, 4, -19]));  
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));