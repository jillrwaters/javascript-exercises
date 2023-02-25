const fibonacci = function(n) {
    if (n < 0) return ("OOPS")
    n = parseInt(n)
    let sequence = [1, 1, 2]
    
    for (let i=2;i<n;i++){
        let next = sequence[i] + sequence[i-1]
        sequence.push(next)
    }

    return sequence[n-1]

};

fibonacci(10)
fibonacci(15)
fibonacci(25)
// Do not edit below this line
module.exports = fibonacci;
