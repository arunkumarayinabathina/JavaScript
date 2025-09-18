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

function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            posts.push(post)

            const error = false;

            if(!error){
                res();
            }
            else{
                rej(`Error something went wrong`);
            }
        },2000)
    })
}
// createPost({title:"Post three",body:"This is post three"}).then(getPosts).catch((err)=>console.log(err));

//Async/Await

// async function init(){
//     await createPost({title:"Post three",body:"This is post three"})
//     getPosts();
// }

// init();

// Async / Await with fetch
async function fetchPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const data = await res.json()
    console.log(data);
}

fetchPosts();

//Promise.all

// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((res,rej)=>
//     setTimeout(res,2000,"Goodbye")
// )

// const promise4 = fetch(`https://jsonplaceholder.typicode.com/posts`)

// const promise5 = fetch(`https://jsonplaceholder.typicode.com/posts`).then(res=>res.json())
// Promise.all([promise1,promise2,promise3,promise4,promise5]).then(values=>console.log(values))


