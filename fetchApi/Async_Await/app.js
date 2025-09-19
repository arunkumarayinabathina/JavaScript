const productsContainer = document.getElementsByClassName("container")[0];

const uri = `http://localhost:3000/products`

// fetch(uri).then((r)=>r.json()).then((d)=>console.log(d));

fetch(uri)
    .then((response) => response.json())
    .then((products) =>
        products.map((product) => {
            const productCard = `
          <div class="card">
                <img src=${product.image} alt=${product.name}>
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">${product.price}</div>
                </div>
            </div>

        `
            productsContainer.innerHTML += productCard
        })
    ).catch((error) => console.log(error));

// Using the async and await
const productsContainer2 = document.getElementsByClassName("container2")[0];


const fetchProducts = async ()=>{
    const respone = await fetch(uri);
    const product = await respone.json();

    const productCard = product.map((product)=>
         `
         <div class="card">
                <img src=${product.image} alt=${product.name}>
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">${product.price}</div>
                </div>
            </div>
        `
    ).join("")
    productsContainer2.innerHTML += productCard;
}

fetchProducts()