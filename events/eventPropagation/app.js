const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child"); 

grandparent.addEventListener("click", () => {
    console.log("Grandparent clicked");
});
parent.addEventListener("click", () => {
    console.log("Parent clicked");
},capture=true);
child.addEventListener("click", () => {
    console.log("Child clicked");
});