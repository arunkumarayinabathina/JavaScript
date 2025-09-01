//  <input type="text" id="name" name="name" placeholder="Enter the name">
//  <input type="text" id="role" name="role" placeholder="Enter the role">
//  <input type="text" id="img" name="image" placeholder="Enter the Img URL">

//  <div id="profileCradContainer">
//  </div>



const container = document.getElementById("profileCradContainer")
const btn = document.getElementById("pcGenerator")
btn.innerText = "Generate"
btn.addEventListener("click",()=>{
    const uname = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const img = document.getElementById("img");

    const file = img.files[0];
    console.log(file);
    if(!file){
        alert("Please select an image file.")
        console.error("No image file selected.")
        return;
    }
    const imgUrl = URL.createObjectURL(file);
    console.log(imgUrl)
    const card = document.createElement("div")
    const cardImage = document.createElement("img")
    cardImage.setAttribute("src",imgUrl)
    const h3 = document.createElement("h3")
    h3.innerText = uname;
    const p = document.createElement("p")
    p.innerText = role;

    card.append(cardImage,h3,p)

    container.appendChild(card);
})

