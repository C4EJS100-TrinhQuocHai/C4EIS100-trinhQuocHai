// init
let movies =['fast and furious','the transporter','undisputed'];
console.log(movies);

// create
let newMovies =prompt('Enter newMovies');
movies.push(newMovies);

// read

let i =prompt('enter read i');
if (i<movies.length){
    console.log(movies[i]);
}

// update 
// 1
let moviesTitle = prompt('enter new moviesTitle');
movies[0]=moviesTitle;
console.log(movies);

// 2
 i =prompt('enter the i location to update');
movies[j]=moviesTitle;
console.log(movies);

// delete
// 1
 i =prompt('enter  at position i ');
movies.splice(i,1);
console.log(movies);

// 2
i =prompt('enter  at position i ');
let n = prompt('Delete n item at position i from movies array');
if(n<movies.length){
    movies.splice (i,n);
    console.log(movies);
}




