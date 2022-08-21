let bgNone=()=>{ 
    document.getElementById('bg').style.backgroundImage ="";
};

let bgLight=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/bluemountains.png)";
};

let bgMarble=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/marble.png)";
    document.getElementById('bg')
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/rainbow.webp')";
};

let bgAurora=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/aurora.webp')";
};
let bgShore=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/shore.webp')";
};
///////////////////////////////////////////////////////////////////////////////
let userInput = document.getElementById("new-task");

userInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

let allTasks = [];

let id = 0;
//task is appended when add button is clicked or enter is keyed
let task=()=>{
    let date = new Date();
    let listDiv = $('.list');

    let created = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let dueDate = document.getElementById('end-date').value;
    let newTask=  document.getElementById('new-task').value;
    
    let taskInfo =`<div id="task-${id}" class="task-container">
                    <div class="created box">${created}</div>
                    <div class="due box">${dueDate}</div>
                    <div id="taskText-${id}" class="task box">${newTask}</div>
                    <div id="done-${id}"class="done box"></div>
                    <div id="edit-${id}" class="edit box"></div>
                    <div id="delete-${id}" class="delete box"></div>                        
                  </div>`

    listDiv.append(taskInfo);
    console.log(`Added a task with id: task-${id}`);
    
    allTasks.push(taskInfo);
    console.log(allTasks);

    //call on create Edit and Delete button functions
    console.log(id);

    let deleteDiv = document.getElementById(`delete-${id}`);
    deleteDiv.appendChild(deleteButton(id));
  
    let editDiv = document.getElementById(`edit-${id}`);
    editDiv.appendChild(editButton(id));

    //Clear input fields
    document.getElementById('new-task').value='';
    document.getElementById('end-date').value='';
    console.log(`Fields are cleared`);   
        
    id++;
};
 
function deleteButton(id){
    let btn=document.createElement('button');
    btn.className='btn btn-outline-dark';
    btn.id= `delBtn-${id}`;
    btn.innerHTML = '<i class="fa-solid fa-trash-can icon"></i>';
    
    btn.onclick = ()=>{
        console.log(`Deleting row with id: task-${id}`);
        let taskToDelete = document.getElementById(`task-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };
    return btn;   
};

function editButton(id){
    let edit=document.createElement('button');
    edit.className='btn btn-outline-dark';
    edit.id= `editBtn-${id}`;
    edit.innerHTML = '<i class="fa-regular fa-pen-to-square icon"></i>';
   
    edit.onclick = ()=>{
        console.log(`Updating task with id: task-${id}`);
        $(`#editBtn-${id}`).hide();

        let textToBeEditted = $(`#taskText-${id}`).text();
        
        console.log(textToBeEditted);
        $(`#taskText-${id}`).text('');

        let taskDiv = $(`#taskText-${id}`);
        taskDiv.append(`<textarea id="taskInput-${id}" class="edit-input">${textToBeEditted}</textarea>`);
        
        let editDiv = document.getElementById(`edit-${id}`);
        console.log(id);
        editDiv.appendChild(saveButton(id));
    };
    return edit;   
};

//<i class="fa-solid fa-square-check icon"></i> 

function saveButton(id){ 
    let save = document.createElement('button');
    save.className='btn btn-outline-dark';
    save.id= `saveBtn-${id}`;
    save.innerHTML = '<i class="fa-regular fa-floppy-disk icon"></i>';
    
    save.onclick=()=>{
        console.log(`Saving edits for task with id: task-${id}`);
        //$(`#editBtn-${id}`).removeAttr("disabled");
        //get new text from input
        let newText = document.getElementById(`taskInput-${id}`).value;
        
        console.log(newText);
        //remove input box
        $(`#taskInput-${id}`).remove;
        
        //new text in div
        $(`#taskText-${id}`).text(newText);
        //remove done button
        $(`#saveBtn-${id}`).remove();

        $(`#editBtn-${id}`).show();
    };
    
    return save;
};      
        