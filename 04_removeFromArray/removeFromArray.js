const removeFromArray = function(array, ...other) {
    for (let i=0;i<other.length;++i){
        let arg = other[i]
        for (let j=0;j<array.length;++j){
            let ele = array[j]
            if (arg===ele){
                array.splice(j,1)
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
