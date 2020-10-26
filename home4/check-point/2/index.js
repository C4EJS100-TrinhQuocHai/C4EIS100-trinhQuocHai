// 2.1, 2.2,2.3.
let movie={
    title:'The dark night rises',
    year: 2012,
    rate: 8.4,
};

console.log(movie);
 x=movie.title;
 y=movie.year;
 z=movie.rate;
let i = prompt('What you want to know?');
if (i == 'title' )
{
    alert(x);
}
else if (i == 'year')
{
    alert(y);
}
else if (i == 'rate')
{
    alert(z);
}
else alert(`${i} does not exist in our data`);
