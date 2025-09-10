// What is an Event?
// An event is an action or occurrence that happens in the browser,
// which JavaScript can respond to. 


// TYPES OF EVENTS

// 1. Mouse Events
    // example : click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove 
// 2. Keyboard Events
    // example : keydown, keyup, keypress
// 3. Form Events
    // example : submit, change, focus, blur, input
// 4. Window Events
    // example : load, resize, scroll, unload


// WAYS TO IMPLEMENT EVENTS
// 1. Inline Events
// 2. Property Based Events (DOM Object Property)
// 3. addEventListener Method



// 1. Inline Events
// This method involves adding event attributes directly to HTML elements.
// Example:
// <button onclick="alert('Button Clicked!')">Click Me</button>

// function handleLogin() {
//    const email = document.querySelector('input[name="email"]').value.trim();
//     const password = document.querySelector('input[name="password"]').value.trim();

//     if (!email || !password) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     alert('Login successful!');
// }

// 2. Property Based Events (DOM Object Property)


// const loginBtn = document.getElementById("LoginBtn");

// loginBtn.onclick = function(){
//     const email = document.querySelector('input[name="email"]').value.trim();
//     const password = document.querySelector('input[name="password"]').value.trim();

//     if (!email || !password) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     alert('Login successful!');
// }

// 3. addEventListener Method

const loginBtn = document.getElementById("LoginBtn");

loginBtn.addEventListener('click',()=>{
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Login successful!');  
})