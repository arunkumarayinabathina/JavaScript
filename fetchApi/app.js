 document.getElementById('getText').addEventListener('click', getText);
    document.getElementById('getUsers').addEventListener('click', getUsers);
    document.getElementById('getPosts').addEventListener('click', getPosts);
    document.getElementById('addPost').addEventListener('submit', addPost);

    function getText(){
        fetch("sample.txt").then((res)=>res.text()).then((data)=>document.getElementById("output").innerHTML = data)
    }

    function getUsers(){
        fetch("users.json")
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach((user) => {
                output += `
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });
            document.getElementById("output").innerHTML = output;
        });
    }

    function getPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach((post)=>{
          output += `
            <div class="card card-body mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }