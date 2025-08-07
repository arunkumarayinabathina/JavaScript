// var username;
// console.log(username);
// username = "Arun";
// console.log(username);
// var username = "Kumar";
// console.log(username);
// var username;
// console.log(username);

// let username;
// console.log(username);
// username = "Arun";
// console.log(username);
// let username = "Kumar";    // Error let variables cannot be re intialized.
// let username;        // Error let variables cannot be redeclared.

// const username;  // Error Const variables must be intialized.
// const username = "Arun";
// username = "Kumar";  // redeclaration not possible
// const username = "kiran"; // reintialization also n ot possible .


// {
//     var box = "fruits";
//     let bottle = "water";
//     const cardboard = "toys";
//     console.log(`
//         Box of ${box}
//         Bottle of ${bottle}
//         Cardboard of ${cardboard}    
//     `)
// }
//     console.log(`
//         Box of ${box} // var ignores the block boundaries
//         // Bottle of ${bottle}   // let are block scoped 
//         Cardboard of ${cardboard}  // const also block scoped
//     `)


// Hoisting

console.log(platform)     // undefined 
var platform = "zoom";

// console.log(app);      // Reference Error
let app = "whatsapp";

// console.log(pi);       // Reference Error
const pi = 1.43;