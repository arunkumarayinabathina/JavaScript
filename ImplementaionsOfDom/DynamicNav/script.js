const navBar = document.getElementById("navBar")

let tabs = ["Home","About","Contact","Services"]
navBar.style.background = "black"
navBar.style.width = "100%"
navBar.style.height = "50px"
navBar.style.display="flex"
navBar.style.alignItems = "center"
navBar.style.justifyContent = "space-around"
tabs.push("Blog")
tabs.pop()
tabs.forEach((tab)=>{
    const tabLink = document.createElement("a");
    tabLink.setAttribute("href",`#${tab.toLowerCase()}`)
    tabLink.innerText = tab;
    tabLink.style.textDecoration = "none"
    tabLink.style.background = "white"
    tabLink.style.padding = "6px"
    tabLink.style.cursor = "pointer"
    navBar.appendChild(tabLink)
})