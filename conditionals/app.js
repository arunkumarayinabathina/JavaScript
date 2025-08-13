// Real world examples for javascript conditionals

// if,if-else,else if,switch,ternary,nested if else

// Examples for each

// if
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if-else
let time = 20;
if (time < 11) {
    console.log("Good morning.");
} else {
    console.log("Good afternoon.");
}

// else if
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// switch
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    default:
        console.log("Unknown fruit.");
}

// ternary
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// nested if else
let num = 10;
if (num > 0) {
    console.log("Positive number");
    if (num % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
} else {
    console.log("Negative number");
}



// Real project based examples

// User authentication
let isAuthenticated = true;
if (isAuthenticated) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// Age verification
let userAge = 16;
if (userAge >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young to vote.");
}

// Temperature check
let temperature = 30;
if (temperature > 35) {
    console.log("It's a hot day.");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cold day.");
}

// Shopping cart
let cartTotal = 150;
if (cartTotal > 100) {
    console.log("You qualify for free shipping.");
} else {
    console.log("Add more items to qualify for free shipping.");
}

// Form validation
let email = "user@example.com";
if (email.includes("@")) {
    console.log("Valid email.");
} else {
    console.log("Invalid email.");
}

s