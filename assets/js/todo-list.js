const form = document.getElementById('new-item')
const alertError = document.querySelector('.error-info')
const taskList = document.getElementById('task-list')
const items = JSON.parse(localStorage.getItem('tasks')) || []
const btnFilterAll = document.querySelector('button[data-filter="all"]')
const btnFilterActive = document.querySelector('button[data-filter="active"]')
const btnFilterCompleted = document.querySelector('button[data-filter="completed"]')
const btnFilterClear = document.querySelector('button[data-filter="clear"]')

function buildDeleteTaskButton(id) {
    const btnDeleteTask = document.createElement('button')
    const svgDeleteTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    btnDeleteTask.classList.add('delete')
    svgDeleteTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svgDeleteTask.setAttribute('width', '18')
    svgDeleteTask.setAttribute('height', '18')
    svgDeleteTask.innerHTML = '<path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>'
    btnDeleteTask.appendChild(svgDeleteTask)

    btnDeleteTask.addEventListener("click", function() {
        deleteTodo(this.parentNode, id)
    })

    return btnDeleteTask
}

function buildCompleteTaskButton(id) {
    const btnCompleteTask = document.createElement('button')
    const svgCompleteTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

    btnCompleteTask.classList.add('complete')
    svgCompleteTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svgCompleteTask.setAttribute('width', '11')
    svgCompleteTask.setAttribute('height', '9')
    svgCompleteTask.innerHTML = '<path transform="translate(0, -15.674)" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>'
    btnCompleteTask.appendChild(svgCompleteTask)

    btnCompleteTask.addEventListener("click", function() {
        completeTodo(this.parentNode, id)
    })

    return btnCompleteTask
}

items.forEach(e => {
    createTodo(e)
    countItems()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputNewTodo = e.target.elements["input_new_todo"]
    const lastItemId = items.length > 0 ? items[items.length - 1].id : 0
    
    if(!inputNewTodo.value) {
        alertError.style.display = "block"
    }
    else {
        alertError.style.display = "none"

        const newItem = {
            "id": lastItemId !== 0 ? lastItemId + 1 : 1,
            "title": inputNewTodo.value,
            "status": ""
        }

        createTodo(newItem)
        countItems()
        inputNewTodo.value = ''
        
        items.push(newItem)
        
        localStorage.setItem("tasks", JSON.stringify(items))
    }
})

/**
 * "CRUD"
 */
function createTodo(task) {
    const newTodo = document.createElement('li')
    const taskTitle = document.createElement('span')
    
    newTodo.classList.add('item')
    newTodo.dataset.id = task.id
    newTodo.dataset.status = task.status
    
    taskTitle.classList.add('title')
    taskTitle.innerHTML += task.title
    
    newTodo.appendChild(buildCompleteTaskButton())
    newTodo.appendChild(taskTitle)
    newTodo.appendChild(buildDeleteTaskButton(task.id))
    
    taskList.appendChild(newTodo)
}

function deleteTodo(task, id) {
    task.remove()
    items.splice(items.findIndex(element => element.id === id), 1)
    console.log(id)
    localStorage.setItem("tasks", JSON.stringify(items))
    countItems()
}

function completeTodo(task, id) {
    const status = task.dataset.status;

    task.classList.toggle("completed");
    task.dataset.status = status === "completed" ? "" : "completed";

    items.forEach(item => {
        if (item.id === id) {
            item.status = task.dataset.status;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(items));
    countItems();
}


/**
 * FILTERS
*/
btnFilterClear.addEventListener("click", () => {
    clearCompletedTasks() 
})

function countItems() {
    const countElement = document.querySelector('span.count')
    let items = document.querySelectorAll('li.item:not(.completed)').length
    countElement.textContent = items
}

function filterAll() {}
function filterActive() {}
function filterCompleted() {}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('li[data-status="completed"]')

    // console.log(completedTasks)

    // completedTasks.remove()
    countItems()
}