const getTheTitles = function(bookList) {
    let titles = []

    for(let i=0;i<bookList.length;i++){
        titles.push(bookList[i].title)
    }

    return titles
};


// Do not edit below this line
module.exports = getTheTitles;
