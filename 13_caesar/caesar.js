const caesar = function(message, shift) {
    let codes = []
    let newMessage = ''
    for (char in message){
        codes.push(message.charCodeAt(char))
    }

    let shiftedCodes = []
    for (i in codes){
        if (codes[i] < 48){
            shiftedCodes.push(codes[i])
        }
        let x = codes[i] + shift
        
        if (x < 65) {
            shiftedCodes.push(90 - ((65 - x) - 1))
        }     
        else if ((x > 90) && (x < 97)) {
            shiftedCodes.push(65 + ((x - 90) - 1))
        }     
        else if (x > 122) {
            shiftedCodes.push(97 + ((x - 122) - 1))
        }
        else {
            shiftedCodes.push(x)
        }
                
    }

    for (i in shiftedCodes){
        let x = shiftedCodes[i]
        newMessage += String.fromCharCode(x)
    }
    return newMessage
};


// caesar("hey", 4)
// caesar('A', 1)
caesar('Mjqqt!', -5)
caesar('Hello, World!', 75)


// Do not edit below this line
// module.exports = caesar;
