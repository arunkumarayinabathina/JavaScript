const heading = document.createElement('h1');
heading.innerHTML = `Welcome <span style="color : red">Arun<span/>`

console.log(heading)

const HeaderDiv = document.getElementById('Header')

HeaderDiv.append(heading)


const List = document.getElementsByTagName("ul");
console.log(List)
const Jumping = document.createElement('li')
Jumping.innerText = "Jumping"
List[0].append(Jumping)

const newDivision = document.createElement("div")
newDivision.innerText="dummy"

// List[0].insertAdjacentElement('afterend',newDivision)


// newDivision.remove()

// List[0].removeChild(Jumping)

// const HeaderOfMain = document.createElement('h1')
// HeaderOfMain.innerText = "Main Section"

// newDivision.replaceWith(HeaderOfMain)

// const body = document.getElementsByTagName('body')
// console.log(body)


const OneUl = document.getElementById('one')

const para = document.createElement('p')
para.innerText = "Paragraph"

const li = document.getElementById("list")

OneUl.replaceChild(para,li)

console.log(OneUl)