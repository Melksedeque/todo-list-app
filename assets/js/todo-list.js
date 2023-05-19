const form = document.getElementById('new-item')
const taskList = document.getElementById('task-list')
const items = JSON.parse(localStorage.getItem('tasks')) || []

items.forEach(e => {
    createTodo(e)
    countItems()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const inputNewTodo = e.target.elements["input_new_todo"]
    const newItem = {
        "id": items.length + 1,
        "title": inputNewTodo.value
    }

    
    createTodo(newItem)
    countItems()
    inputNewTodo.value = ''
    
    items.push(newItem)
    
    localStorage.setItem("tasks", JSON.stringify(items))
})

function countItems() {
    const countElement = document.querySelector('span.count');
    let items = document.querySelectorAll('li.item:not(.completed)').length;
    countElement.textContent = items;
}

function createTodo(task) {
    const newTodo = document.createElement('li')
    const btnCompleteTask = document.createElement('button')
    const svgCompleteTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const taskTitle = document.createElement('span')
    const btnClearTask = document.createElement('button')
    const svgClearTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    
    newTodo.classList.add('item')
    newTodo.dataset.id = task.id
    
    btnCompleteTask.classList.add('complete')
    svgCompleteTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svgCompleteTask.setAttribute('width', '11')
    svgCompleteTask.setAttribute('height', '9')
    svgCompleteTask.innerHTML = '<path transform="translate(0, -15.674)" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>'
    btnCompleteTask.appendChild(svgCompleteTask)
    
    taskTitle.classList.add('title')
    taskTitle.innerHTML += task.title
    
    btnClearTask.classList.add('delete')
    svgClearTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svgClearTask.setAttribute('width', '18')
    svgClearTask.setAttribute('height', '18')
    svgClearTask.innerHTML = '<path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>'
    btnClearTask.appendChild(svgClearTask)
    
    newTodo.appendChild(btnCompleteTask)
    newTodo.appendChild(taskTitle)
    newTodo.appendChild(btnClearTask)
    
    taskList.appendChild(newTodo)
}












// $(function() {
//     // Complete task
//     $('button.complete').on('click', function() {
//         $(this).closest('li').addClass('completed');
//         countItems();
//     });

//     // Delete list item
//     $('button.delete').on('click', function() {
//         $(this).closest('li').fadeOut('fast', function() {
//             $(this).remove();
//             countItems();
//         });
//     });

//     // Delete all completed tasks
//     $('button.clear-items').on('click', function() {
//         $('main.page').find('li.completed').fadeOut('fast', function() {
//             $(this).remove();
//         });
//     });

//     // Filters functions
//     $('div.items-filter button.all-items').on('click', function() {
//         $('div.items-filter button').removeClass('active');    
//         $(this).addClass('active');
//         $('main.page section.list-todo ul.list-items li.item').fadeIn('fast');
//     });

//     $('div.items-filter button.active-items').on('click', function() {
//         $('div.items-filter button').removeClass('active');    
//         $(this).addClass('active');
//         $('main.page section.list-todo ul.list-items li.item.completed').fadeOut('fast');
//         $('main.page section.list-todo ul.list-items li.item').not('.completed').fadeIn('fast');
//     });

//     $('div.items-filter button.completed-items').on('click', function() {
//         $('div.items-filter button').removeClass('active');    
//         $(this).addClass('active');
//         $('main.page section.list-todo ul.list-items li.item').not('.completed').fadeOut('fast');
//         $('main.page section.list-todo ul.list-items li.item.completed').fadeIn('fast');
//     });
// });
