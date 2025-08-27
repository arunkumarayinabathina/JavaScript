// const main = document.getElementsByTagName('main')[0]


// console.log(main)

// 1. CREATE

// const div = document.createElement(`div`)
// div.textContent = "Main first div"
// main.appendChild(div)

// const body = document.getElementsByTagName("body")[0]

// body.insertBefore(div,main)

// main.insertAdjacentHTML('beforeEnd',`<p>Welcome</p>`)
// console.log(body)

// document.createElement("tagName")
// document.createTextNode(text)
// element.appendChild(node)
// element.prependChild(node)
// element.insertBefore(newNode,ExistingNode)
// Parent               newElement   old element
// element.insertAdjacentHTML(position,value)

// positons:
//     1. beforeBegin  =>  <p></p>(new)<main></main>(old)  
//     2. afterBegin   =>  <main><p></p>(new)<li></li>(old)</main>(old)
//     3. afterEnd     =>  <main></main>(old)<p></p>(new)
//     4. beforeEnd    =>  <main><li></li>(old)<p></p>(new)</main>(old)


// 2. READ

// document.getElementById("id")
// document.getElementsByClassName("clsName")
// document.getElementsByTagName("tagName")
// document.querySelector("selector")
// document.querySelectorAll("selector")

// const div = document.getElementsByTagName("div")[0]

// console.log(div.innerHTML)
// console.log(div.textContent)

// const input = document.getElementById("inp").value;
// console.log(input)



// 3. Update

// const paragraph = document.querySelector("div>p")  
// const paragraph = document.querySelector("div>p").style.color="red"  
// paragraph.innerHTML = `<h1>uffff.....</h1>`
// paragraph.textContent = `ld;skvcjghsjak`

// paragraph.setAttribute("class","para1")

// paragraph.id = "para"
// paragraph.classList.add("para1")
// paragraph.classList.toggle("para1")   
// => if className is their it removes it else it adds to the element
// console.log(paragraph.getAttribute('class'))
// console.log(paragraph)

// 4. DELETE

// const body = document.getElementsByTagName("body")[0]

// const paragraph = document.querySelector("div")
// const p = document.getElementsByTagName("p")[0]
// paragraph.removeChild(p)
// paragraph.remove()
// console.log(paragraph)  


// const newElement = document.createElement("h1")
// newElement.innerText = "Welcome"

// paragraph.replaceChild(newElement,p)


// MINI TODO


// taskInput
// addBtn
// taskList

const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

addBtn.addEventListener("click",()=>{
    if(taskInput.value.trim === "") return;


    const li = document.createElement("li")
    li.textContent = taskInput.value;

    li.addEventListener("dblclick",()=>{
        const newText = prompt("Edit task : ",li.textContent);
        if(newText) li.textContent = newText;
    })

    li.addEventListener("contextmenu",(e)=>{
        e.preventDefault();       // removes the default functionality 
        li.remove();              // used to add our own functionality
    })

    taskList.appendChild(li)
    taskInput.value = "";
})