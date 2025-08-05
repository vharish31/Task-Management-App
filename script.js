
let button = document.getElementById('add')
let taskList = document.getElementById('task-list')
let input = document.getElementById('task-input');

let tasks = [];
window.onload = ()=>{
    tasks = JSON.parse(localStorage.getItem('tasks')) || []
    taskList.innerHTML = '';
    tasks.forEach(task=>displayTasks(task))
}
button.addEventListener('click',()=>{
    if (input.value.trim() === '') return;
    tasks.push(input.value)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTasks(input.value)
    input.value=''
})


function displayTasks(task){
    let list = document.createElement('li');
    list.innerText = task;
    taskList.appendChild(list)
    list.innerText = task;
    list.style.backgroundColor = '#f0f0f0';
    taskList.appendChild(list);
}

