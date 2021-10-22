function printZero(val1, val2) {
    let valSplit = (""+val1).split("")
    let result = [] 
    
    for (let i=0; i < val2; i++) {
        if(i < val2 - valSplit.length) {
            result.push(0)
        } 
    }
    return result.concat(valSplit)
}

console.log(printZero(5,5))