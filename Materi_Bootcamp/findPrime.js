function isPrime (num){
    for(let i = 2 ; i*i <= num ; i++){
        if(num % i === 0 )
        return false
    }
    return true
}

function generatePrime(number){
    const arr = []
    for (let i = 2 ; i <number ;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    return arr
}

console.log(generatePrime(37));