const sumAll = function(num1,num2) {
    let sum = 0;

    if (num1 < 0 || num2 < 0) return "ERROR"
    if (typeof(num1)!== "number" || typeof(num2) !== "number") return "ERROR"
    let max = Math.max(num1,num2)
    let min = Math.min(num1,num2)

    while (min <= max) {
        sum += min
        min++
    }


    return sum

};
// sumAll(1, 4)
// sumAll(1, 4000)
// sumAll(-10, 4)
// sumAll(10, "90")
// sumAll(10, [90, 1])
// Do not edit below this line
module.exports = sumAll;
