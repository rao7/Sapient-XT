const list = new Array(1,2,24345,6); // deprecated

console.log(list);


const lists = ['wert',45235,'wawgf',345256];
console.log(lists);

// Array api
// Iterators  -> for , for..each , map , filter, find , reduce
// Add operations -> where you add in beginnig or end or middle of array.
// remove -> slice , splice
// update  -> slice , splice

// utility -> sort -> comparator

lists.forEach((item,index)=>{
console.log(item ,index);
});

// quiz

const video = {
    genere : "sci fi",
    listOf : ['a','r','u','w'],
    findMovies(){
        this.listOf.forEach((movie , index)=>{
            console.log(movie)
        })
    }
}

console.log(window.movie);
video.findMovies();


