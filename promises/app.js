// const isLogin = true;
// const promise = new Promise((res,rej)=>{
//     if(isLogin === true){
//         res("Logged In");
//     }
//     else{
//         rej("Not Logged In");
//     }
// })
// promise.then((mes)=>{
//     console.log(mes);
// })
// promise.catch(()=>{
//     console.log(mes);
// })


// const uri = "https://jsonplaceholder.typicode.com/posts"
// const arrData = [];
// const data = fetch(uri)

// data.then((res)=>res.json()).then((data)=>arrData.push(data))
// data.catch((err)=>console.log(err))

// console.log(arrData)


const posts = [
    {title:"Post one",body:"This is post one"},
    {title:"Post two",body:"This is post two"}
]

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000)
}

createPost({title:"Post three",body:"This is post three"},getPosts)