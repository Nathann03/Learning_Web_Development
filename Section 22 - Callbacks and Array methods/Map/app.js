const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})

const new_array = [];

for (nums of numbers) {
    new_array.push(nums * 2);
}


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

//Implicit return
const titles = movies.map(movie => (
    movie.title.toUpperCase()
))

// const tits = [];
// for (movie of movies) {
//     tits.push(movie.title.toUpperCase())
// }
