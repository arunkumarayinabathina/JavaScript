// 1. Function Declaration (without parameters & without return)

function greetWelcome(){
    console.log("Welcome!");
}
greetWelcome();

// 2. Function Declaration (without parameters & with return)

function DisplayName(){
    const name = "Arun"
    return name;
}
console.log(DisplayName());

// 3. Function Declaration (with parameters & without return)

function Addition(a,b){
    console.log(a+b);
}
Addition(2,3);

// 4. Function Declaration (with parameters & with return)

function addToCart(item,quantity){
    return `${quantity} ${item}'s added to cart.`
}
console.log(addToCart("Shirts",3))

// 5. Function with Default Parameters

function displayLocation(location="India"){
    return location;
}

console.log(displayLocation());


// 6. Function Expression (without parameters)

const wish = function(){
    console.log("Welcome to application!");
}
wish();

// 7. Function Expression (with return value)

const wishByName = function(name){
    console.log(`Welcoem ${name}`);
}
wishByName("Arun");

// 8. IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("IIFE Invoked.")
})();

(function(name){
    console.log("IIFE Invoked with parameters.")
})("Arun");


// 9. Arrow Function 

const sayHii = (name)=>`Hii ${name}`

console.log(sayHii("Arun"))


const multiplyNumbers = (a, b) => a * b;

console.log("Result:", multiplyNumbers(3,2));


// 10. Function using a Callback

function Outside(name,inside){
    console.log(name);
    inside();
}

function insideMethod(){
    console.log("From Inside Method");
}
Outside("Arun",insideMethod);