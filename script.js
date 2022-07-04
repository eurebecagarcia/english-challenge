let comedy = [
    {
        title: 'Jumanji: Welcome the jungle',
        direction: 'Jake Kasdan',
        year: 2018
    }
];
let action = [
    {
        title: 'Uncharted',
        direction: 'Ruben Fleischer',
        year: 2022
    }
];
let fantasy = [
    {
        title: 'Harry Potter and the Philosophers Stone',
        direction: 'Chris Columbus',
        year: 2001
    },
];

function favoriteMovie(){
    if(fantasy[0].title.includes('Harry Potter')){
        console.log(`My favorite movie is ${fantasy[0].title}`)
    } else {
        console.log('Not even 5 stars')
    }
}

favoriteMovie();