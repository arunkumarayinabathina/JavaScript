// Changing text and styling 

let IdSelectorHeader = document.getElementById("one");
IdSelectorHeader.style.color = "red";
IdSelectorHeader.style.background = "Violet"
IdSelectorHeader.style.fontFamily = "monospace"
IdSelectorHeader.style.fontSize = "30px"
IdSelectorHeader.style.display = "inline"



function Logged() {
    let LoginUSer = document.getElementById("isLogin");
    let ButtonText = document.getElementById("btnText");
    if (LoginUSer.innerText == "Guest") {
        LoginUSer.innerText = "Successfully Logged In";
        ButtonText.innerText = "Logout"
    }
    else {
        LoginUSer.innerText = "Guest";
        ButtonText.innerText = "Login"
    }
}

//  Changing attribute and event listener

let DpImage = document.getElementById("dpImage");
let UpdateProfile = document.getElementById("updateProfile");

UpdateProfile.addEventListener('click', () => {
    DpImage.setAttribute('src', './assets/review3.png')
})


let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener('click', () => {
    let UserName = document.getElementById("username").value;
    alert(`Hello ${UserName}!`)
})

