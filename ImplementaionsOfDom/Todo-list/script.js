const textInput = document.getElementById("textInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

//  <input type="text" id="textInput">
//  <button id="addBtn">Add</button>
//  <ul id="taskList"></ul>

// Add Task to the list 


addBtn.addEventListener('click',()=>{
    const task = document.createElement("li");
    const internalText = document.createElement("span");
    internalText.textContent = textInput.value.trim();
    task.append(internalText);
    // Delete a task
    const del = document.createElement("button")
    del.textContent = "D";
    task.append(del)
    taskList.appendChild(task)

    del.addEventListener("click",()=>{
        taskList.remove()
    })

    const edit = document.createElement("button")
    edit.textContent = "E"
    task.append(edit);

    edit.addEventListener("click",()=>{
        const insideInput = document.createElement('input');
        const insideBtn = document.createElement('button')
        insideBtn.textContent = "Update"
        const insideDiv = document.createElement('div');

        insideDiv.appendChild(insideInput)
        insideDiv.appendChild(insideBtn)

        insideInput.value = internalText.textContent;
        taskList.replaceChild(insideDiv,task)

        insideBtn.addEventListener('click',()=>{
            internalText.textContent = insideInput.value.trim();
            taskList.replaceChild(task,insideDiv)
        })
    })
    textInput.value=""
})