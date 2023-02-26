const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findAges = function(listOfPeople) {
    for (let i=0;i<listOfPeople.length;i++){
        let person = listOfPeople[i]
        if (person.yearOfDeath === undefined){
            person["age"] = 2023 - person.yearOfBirth
        }
        else 
        {person["age"] = person.yearOfDeath - person.yearOfBirth}
    }
    return people
}
findAges(people)

const findTheOldest = function(listOfPeople) {
    findAges(listOfPeople)
    let oldest = ''

    for (let i=1;i<listOfPeople.length;i++){
        let person = listOfPeople[i]
        let previousPerson = listOfPeople[i-1]
        if (person.yearOfDeath === undefined) {return person}
        else if (person.age > previousPerson.age){
            oldest = person
        }
    }
    return oldest

};



  findTheOldest(people).name



// Do not edit below this line
module.exports = findTheOldest;
