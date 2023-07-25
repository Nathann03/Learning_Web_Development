
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("error!!")
// }

// Uses try catch to see if the input of the function is 
// a valid input, useful for listening during website
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        //console.log(e);
        console.log("Please pass a str next time!");
    }
}