function print(val) {
    for (let i = 0; i < val; i++) {
        if (i < 1) {
            console.log("*")
        } else {
            console.log("*".repeat(i+1+i))
        }
    }
}

print(4)