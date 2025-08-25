let messages = document.getElementsByClassName("msg");
// messages.textContent = "One"
messages[0].textContent = "One"
messages[1].textContent = "Two"
messages[2].textContent = "Three"


let colorCircles = document.getElementsByClassName("colorBtns");

for(let i=0;i<colorCircles.length;i++){
    if(i%2 == 0){
        colorCircles[i].style.backgroundColor="red"
    }
    else{
        colorCircles[i].style.backgroundColor="blue"
    }
}