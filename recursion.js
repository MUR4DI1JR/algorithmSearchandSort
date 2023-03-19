const factorial = (n) =>{
    if (n === 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(8));

const finobachi = (n) =>{
    if (n === 1 || n === 2){
        return 1
    }
    return finobachi(n-1) + finobachi(n-2)
}

console.log(finobachi(10));