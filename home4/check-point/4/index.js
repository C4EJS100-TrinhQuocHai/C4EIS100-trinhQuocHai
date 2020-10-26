let movie={
    title:'The dark night rises',
    year: 2013,
    rate: 8.8,
};
let i = prompt('What you want to update?');
if (i == 'title')
{
    movie.title = prompt('What is the update?');
}
else if (i == 'year')
{
    movie.year = prompt('What is the update?');
}
else if (i == 'rate')
{
    movie.rate = prompt('What is the update?');
}
else if (i=='reciew'){
    alert('reciew does not exist in your data,we will add new');
    movie.reciew=prompt('enter the new data');
    console.log(movie);
}
else alert(`${i} does not exist in your data`);