const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        brand: "Sony",
        actualPrice: 5999,
        discountedPrice: 4499,
        ratings: [5, 4, 4, 5, 3],
        quantity: 120,
        description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
        inStock: true,
        image: "https://picsum.photos/id/1011/400/400",
    },
    {
        id: 2,
        name: "Smart LED TV 43 inch",
        category: "Electronics",
        brand: "Samsung",
        actualPrice: 28999,
        discountedPrice: 23999,
        ratings: [4, 4, 5, 5, 4, 3],
        quantity: 45,
        description: "Ultra HD 4K Smart TV with voice assistant and multiple apps.",
        inStock: true,
        image: "https://picsum.photos/id/1015/400/400",
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Footwear",
        brand: "Nike",
        actualPrice: 3999,
        discountedPrice: 2999,
        ratings: [5, 5, 4, 4, 4],
        quantity: 80,
        description: "Lightweight, breathable running shoes for daily workouts.",
        inStock: true,
        image: "https://picsum.photos/id/1020/400/400",
    },
    {
        id: 4,
        name: "Steel Water Bottle",
        category: "Home & Kitchen",
        brand: "Milton",
        actualPrice: 899,
        discountedPrice: 599,
        ratings: [4, 5, 4, 3, 5],
        quantity: 300,
        description: "Hot & cold vacuum insulated water bottle, 1L capacity.",
        inStock: true,
        image: "https://picsum.photos/id/1025/400/400",
    },
    {
        id: 5,
        name: "Gaming Laptop",
        category: "Computers",
        brand: "Asus",
        actualPrice: 99999,
        discountedPrice: 84999,
        ratings: [5, 5, 4, 5, 4, 5],
        quantity: 25,
        description: "RTX 4060, Intel i7, 16GB RAM, 1TB SSD – perfect for gaming & work.",
        inStock: true,
        image: "https://picsum.photos/id/1035/400/400",
    },
    {
        id: 6,
        name: "Cotton T-Shirt",
        category: "Fashion",
        brand: "H&M",
        actualPrice: 799,
        discountedPrice: 499,
        ratings: [4, 3, 5, 4, 4],
        quantity: 200,
        description: "100% cotton casual wear T-shirt for men & women.",
        inStock: true,
        image: "https://picsum.photos/id/1040/400/400",
    },
    {
        id: 7,
        name: "Microwave Oven",
        category: "Appliances",
        brand: "LG",
        actualPrice: 14999,
        discountedPrice: 12499,
        ratings: [5, 4, 5, 4, 5],
        quantity: 60,
        description: "28L convection microwave oven with smart cooking modes.",
        inStock: true,
        image: "https://picsum.photos/id/1045/400/400",
    },
    {
        id: 8,
        name: "Fitness Smartwatch",
        category: "Wearables",
        brand: "Fitbit",
        actualPrice: 10999,
        discountedPrice: 8999,
        ratings: [4, 4, 3, 5, 4],
        quantity: 90,
        description: "Tracks steps, heart rate, sleep, and comes with water resistance.",
        inStock: true,
        image: "https://picsum.photos/id/1050/400/400",
    },
    {
        id: 9,
        name: "Office Chair",
        category: "Furniture",
        brand: "GreenSoul",
        actualPrice: 14999,
        discountedPrice: 9999,
        ratings: [4, 5, 4, 4, 5],
        quantity: 50,
        description: "Ergonomic chair with lumbar support and adjustable height.",
        inStock: true,
        image: "https://picsum.photos/id/1055/400/400",
    },
    {
        id: 10,
        name: "Electric Kettle",
        category: "Home Appliances",
        brand: "Philips",
        actualPrice: 2499,
        discountedPrice: 1999,
        ratings: [4, 4, 5, 3, 4],
        quantity: 150,
        description: "1.5L stainless steel electric kettle with auto shut-off feature.",
        inStock: true,
        image: "https://picsum.photos/id/1060/400/400",
    },
]

const mainDiv = document.getElementById("main");

// id: 1,
// name: "Wireless Bluetooth Headphones",
// category: "Electronics",
// brand: "Sony",
// actualPrice: 5999,
// discountedPrice: 4499,
// ratings: [5, 4, 4, 5, 3],
// quantity: 120,
// description: "Noise-cancelling over-ear headphones with 30 hours battery life.",
// inStock: true,
// image: "https://picsum.photos/id/1011/400/400"
// const averageRatingsofEachProduct = document.getElementById("averageRatingsofEachProduct");



const categoryNav = document.getElementById('categoryNav');
const ul = document.createElement('ul');

const uniqueCategories = [];

for(const p of products){
    if(!uniqueCategories.includes(p.category)){
        uniqueCategories.push(p.category)
    }
}

const navTabs = uniqueCategories.forEach(category => {
    const li = document.createElement('li');
    li.innerText = category;
    ul.appendChild(li);
}) 

categoryNav.append(ul);




products.forEach(p => {
    const avg = p.ratings.reduce((a, b) => a + b, 0) / p.ratings.length;

    // const rating = document.createElement('div');
    // rating.innerHTML = `<p>${p.name} - ${avg.toFixed(1)}</p>`;

    // averageRatingsofEachProduct.append(rating);

    p.avg = avg.toFixed(1);
});

const productCard = products.map((product) =>
    `
        <div class="card">
            <img src=${product.image} alt=${product.name}/>
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>${product.discountedPrice} - <strike>${product.actualPrice}</strike></p>
            Average rating - <h5 style="display:inline">${product.avg}</h5>
            <button>Add to cart</button>
        </div>
    `
).join(" ")

mainDiv.innerHTML = productCard;

const submitBtn = document.getElementById('filterBtn');

submitBtn.addEventListener('click', () => {
    const startPrice = document.getElementById('start').value;
    const endPrice = document.getElementById('end').value;

    const filteredProducts = products.filter((product) => product.actualPrice >= startPrice && product.actualPrice <= endPrice);

    if (filteredProducts.length == 0) {
        mainDiv.innerHTML = "No results found"
    }
    else {
        const filteredData = filteredProducts.map((product) =>
            `
            <div class="card">
            <img src=${product.image} alt=${product.name}/>
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>${product.discountedPrice} - <strike>${product.actualPrice}</strike></p>
            Average rating - <h5 style="display:inline">${product.avg}</h5>
            <button>Add to cart</button>
            </div>

        `
        ).join(" ")
        mainDiv.innerHTML = filteredData;
    }
})


const sortBtn = document.getElementById('sort')

sortBtn.addEventListener('click', () => {
    const sortedproducts = products.sort((a, b) => a.discountedPrice - b.discountedPrice);

    const sortedData = sortedproducts.map((product) =>
        `
           <div class="card">
            <img src=${product.image} alt=${product.name}/>
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>${product.discountedPrice} - <strike>${product.actualPrice}</strike></p>
            Average rating - <h5 style="display:inline">${product.avg}</h5>
            <button>Add to cart</button>
            </div>  
        `
    ).join(" ")

    mainDiv.innerHTML = sortedData
})



