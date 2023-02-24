const add = function(n1,n2) {
    return n1 + n2
};

const subtract = function(n1,n2) {
	  return n1 - n2
};

const sum = function(array) {
    let result = 0
    if (array.length === 0) return 0
    if (array.length === 1) return array[0]
    
    array.map(x => result += x)
    
    return result
	
};

const multiply = function(array) {
    let result = 1
    array.map(x => result *= x)

    return result
};

const power = function(n,p) {
    let arr = []
    let i = 0
    while (i < p) {
      arr.push(n)
      i++
    } 
    return multiply(arr)
};

const factorial = function(n) {
  let ints = []  // for integers below n, and n
  
  if (n === 0 || n === 1) return 1
    
    for (let i=1;i<=n;i++){
      ints.push(i)
    }
    return multiply(ints)
 
};

factorial(0)
factorial(1)
factorial(2)
factorial(5)
factorial(10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
