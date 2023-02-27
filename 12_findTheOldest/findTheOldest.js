function assignAges(arr){
    for (let i=0;i<arr.length;i++){
      let person = arr[i]
      if (person.yearOfDeath === undefined){
        person.age = new Date().getFullYear() - person.yearOfBirth
      }
      else {
        person.age = person.yearOfDeath - person.yearOfBirth
      }
    }
    return people
}


function findTheOldest(arr) {
    assignAges(arr)
    let oldest = arr[0]
    for (let i=1;i<arr.length;i++){
      let previous = arr[i-1]
      let current = arr[i]
      if (current.age > oldest.age || current.age > previous.age) {
        oldest = current
      }
    }
    return oldest
}


// Do not edit below this line
module.exports = findTheOldest;
