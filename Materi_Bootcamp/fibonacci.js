function fibonacci(value) {
    let result = [1, 1]

    for (let i = 1; i < value; i++) {
        let addVal = result[i] + result[i - 1]
        if (addVal < value) {
            result.push(addVal)
        } else {
            return result
        }
    }
    return result
}

console.log(fibonacci(50))