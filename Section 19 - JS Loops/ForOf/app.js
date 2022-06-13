const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// For of loop iterating over an array
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}



// For Of vs Regular for loops

// Array
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// Regular method using "for loops" to iterate over array

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// "For of" method of iterating over seating chart array

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// Using for of to iterate over any iterable obj (str)

// for (let char of "hello world") {
//     console.log(char)
// }

