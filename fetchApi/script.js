// Fetching the data.

const url = `https://jsonplaceholder.typicode.com/todos`
const fetchData = async ()=>{
    try {
        const response = await fetch(url);
        if(!response.ok){console.log("Error with the source")}
        const data = await response.json();

        console.log(data[0].title);
    } catch (error) {
        console.log(error);
    }
}

fetchData()


// post data using the fetch method

const postData = async ()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",

        {
            method:'POST',
            body:JSON.stringify({
                title:'Welcome'
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

postData();