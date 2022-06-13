// Project to do
// 1. "new" input -> add a to do to array (use push)
// 2. "list" input -> displays current list (for of)
// 3. "delete" input -> deletes specified index from array (use splice)
// 4. "quit" input -> exit app

let input = prompt("What would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// Provides escape conditions for user input
while (input !== 'quit' && input !== 'q') {
    if (input === "list") {
        // Outputs list for user in console
        console.log("*****************")
        // For loop to display all items in todo array
        // Note: For of array does not work since we want to display
        // index of each item using i as a counter.
        for (let i = 0; i < todos.length; i += 1) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*****************")
    } else if (input === "new") {
        // Creates new list item added to end of the todo array
        const newitem = prompt("Ok, what is the new todo?");
        todos.push(newitem);
        console.log("${newTodo} added to the list!")
    } else if (input === 'delete') {
        // Deletes specified item in todo array using index
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        // If statement checks if index input is an integer using "Number.isNaN" method
        if (!Number.isNaN(index)) {
            // Uses .splice method to delete specified item in array based on index

            // Note: takes spliced index and assigns it to deleted var to be used 
            // in console.log
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }
    }
    // Input continually repeats after if statement is done and while condition is still
    // true
    input = prompt('what would you like to do?')
}
// Tells user that they have quit the app.
// Note: To do list is global so it will retain its memory.
console.log('OK QUIT THE APP!')

