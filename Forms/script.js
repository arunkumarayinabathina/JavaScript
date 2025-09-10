const regxExpression = /^[^abc][abc]/
const testExp = "1a"
console.log(regxExpression.test(testExp))

// Email pattern: basic validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password pattern: at least 8 characters, one letter, one number
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Example usage
const email = "user@example.com";
const password = "passw0rd";

console.log(emailPattern.test(email));      // true
console.log(passwordPattern.test(password)); // true