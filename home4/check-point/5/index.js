// 1
let movies = {
    title: ['fast and furious','the transporter','undisputed'],
    year: [2013,2014,2017],
    rate: [9.5,9.6,9.9],
};
console.log(movies);
// 2
console.log(movies.title[0]);
console.log(movies.year[0]);
console.log(movies.rate[0]);

// 3
console.log(movies.title[2]);
//4

for (let i=0; i < 3 ; i++)
{
    console.log(movies.title[i]);
    console.log(movies.year[i]);
    console.log(movies.rate[i]);
}
// 5
for (let i=0; i<3; i++)
{
console.log('--------------------');
console.log(movies.title[i]);
console.log(movies.year[i]);
console.log(movies.rate[i]);
}

// 6
movies.rate=movies.rate[2] + 0.7;
console.log(movies.rate);

