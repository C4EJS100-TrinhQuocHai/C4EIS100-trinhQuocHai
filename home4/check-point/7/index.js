//1
let movies = {
    title: ['fast and furious','the transporter','undisputed'],
    year: [2013,2014,2017],
    rate: [9.5,9.6,9.9],
    caste: ['jackSon',' Frank Martin','boyka']
}
//2

for(i=0;i<3;i++){
    console.log('...................');
    console.log(movies.title[i]);
    console.log(`year: ${movies.year[i]}`);
    console.log(`rate: ${movies.rate[i]}`);
    console.log(`caste:  ${movies.caste[i]}`);
}