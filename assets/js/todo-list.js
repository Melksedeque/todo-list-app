const form = document.getElementById('new-item')
const alertError = document.querySelector('.error-info')
const taskList = document.getElementById('task-list')
const items = JSON.parse(localStorage.getItem('tasks')) || []
const btnFilterAll = document.querySelector('button[data-filter="all"]')
const btnFilterActive = document.querySelector('button[data-filter="active"]')
const btnFilterCompleted = document.querySelector('button[data-filter="completed"]')
const btnFilterClear = document.querySelector('button[data-filter="clear"]')
let listItems

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

function showTasks() {
    items.forEach(e => {
        createTodo(e)
        countItems()
    })
}

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
            "status": "",
        }
        
        createTodo(newItem)
        countItems()
        inputNewTodo.value = ''
        
        items.push(newItem)
        
        saveData()
        dragAndDrop()
    }
})

/**
 * "CRUD"
*/
function createTodo(task) {
    const newTodo = document.createElement('li')
    const taskTitle = document.createElement('span')
    
    if(task.status !== "") {
        newTodo.classList.add('item', task.status)
    }
    else {
        newTodo.classList.add('item')
    }
    newTodo.dataset.id = task.id
    newTodo.dataset.item = "item"
    newTodo.dataset.status = task.status
    newTodo.setAttribute('draggable', true)
    
    taskTitle.classList.add('title')
    taskTitle.innerHTML += task.title
    
    newTodo.appendChild(buildCompleteTaskButton(task.id))
    newTodo.appendChild(taskTitle)
    newTodo.appendChild(buildDeleteTaskButton(task.id))
    
    taskList.appendChild(newTodo)
}

function deleteTodo(task, id) {
    task.remove()
    items.splice(items.findIndex(element => element.id === id), 1)
    saveData()
    countItems()
}

function completeTodo(task, id) {
    const classList = task.classList
    const status = task.dataset.status
  
    if (status === "completed") {
      classList.remove("completed")
      task.dataset.status = ""
      updateTaskStatus(id, "")
    } else {
      classList.add("completed")
      task.dataset.status = "completed"
      updateTaskStatus(id, "completed")
    }
  
    saveData()
    countItems()
}


/**
 * FILTERS
*/
btnFilterAll.addEventListener("click", function() {
    btnFilterActive.classList.remove('active')
    btnFilterCompleted.classList.remove('active')
    this.classList.add('active')

    listItems = document.querySelectorAll('[data-item]')

    listItems.forEach((item) => {
        showElement(item)
    })
})

btnFilterActive.addEventListener("click", function() {
    btnFilterAll.classList.remove('active')
    btnFilterCompleted.classList.remove('active')
    this.classList.add('active')
    filterActive(listItems)
})

btnFilterCompleted.addEventListener("click", function() {
    btnFilterActive.classList.remove('active')
    btnFilterAll.classList.remove('active')
    this.classList.add('active')
    filterCompleted(listItems)
})

btnFilterClear.addEventListener("click", () => {
    clearCompletedTasks() 
})

function countItems() {
    const countElement = document.querySelector('span.count')
    let items = document.querySelectorAll('li.item:not(.completed)').length
    countElement.textContent = items
}

function filterActive(listItems) {
    listItems = document.querySelectorAll('[data-item]')

    listItems.forEach((item) => {
        const itemId = item.dataset.id
        const itemObj = items.find((element) => element.id.toString() === itemId)

        if (!itemObj || itemObj.status === 'completed') {
            hideElement(item)
        }
        else {
            showElement(item)
        }
    })
}

function filterCompleted(listItems) {
    listItems = document.querySelectorAll('[data-item]')

    listItems.forEach((item) => {
        const itemId = item.dataset.id
        const itemObj = items.find((element) => element.id.toString() === itemId)

        if (!itemObj || itemObj.status !== 'completed') {
            hideElement(item)
        } else {
            showElement(item)
        }
    })
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('li[data-status="completed"]')

    completedTasks.forEach((task) => {
        deleteTodo(task, task.dataset.id)
    })
}

function updateTaskStatus(id, status) {
    const taskIndex = items.findIndex((task) => task.id === id)
    if (taskIndex !== -1) {
        items[taskIndex].status = status
        saveData()
    }
}

function saveData(){
    localStorage.setItem("tasks", JSON.stringify(items))
}

function dragAndDrop() {
    let items = document.querySelectorAll('#task-list li'),
        dragged = null;

    for(let i of items) {
        i.addEventListener("dragstart", function() {
            dragged = this;

            for(let it of items) {
                if(it != dragged) {
                    it.classList.add('hint');
                }
            }
        });

        i.addEventListener("dragenter", function() {
            if(this != dragged) {
                this.classList.add('active');
            }
        });

        i.addEventListener("dragleave", function() {
            this.classList.remove('active');
        });
        
        i.addEventListener("dragend", function() {
            for(let it of items) {
                if(it != dragged) {
                    it.classList.remove('hint');
                    it.classList.remove('active');
                }
            }
        });

        i.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        i.addEventListener("drop", function(e) {
            e.preventDefault();

            if(this != dragged) {
                let all = document.querySelectorAll('#task-list li'),
                    draggedpos = 0,
                    droppedpos = 0;
                
                for(let it = 0; it < all.length; it++) {
                    if(dragged == all[it]) { draggedpos = it; }
                    if(this == all[it]) { droppedpos = it; }
                }

                if(draggedpos < droppedpos) {
                    this.parentNode.insertBefore(dragged, this.nextSibling);
                }
                else {
                    this.parentNode.insertBefore(dragged, this);
                }
            }
        });
    }
}

showTasks()
dragAndDrop()