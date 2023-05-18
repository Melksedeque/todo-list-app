const form = document.getElementById('new-item')
const taskList = document.getElementById('task-list')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const inputNewTodo = e.target.elements["input_new_todo"]
    
    createTodo(inputNewTodo.value)
    inputNewTodo.value = ''
})

function createTodo(title) {
    const newTodo = document.createElement('li')
    const btnCompleteTask = document.createElement('button')
    const svgCompleteTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const taskTitle = document.createElement('span')
    const btnClearTask = document.createElement('button')
    const svgClearTask = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  
    newTodo.classList.add('item')

    btnCompleteTask.classList.add('complete')
    svgCompleteTask.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svgCompleteTask.setAttribute('width', '11')
    svgCompleteTask.setAttribute('height', '9')
    svgCompleteTask.innerHTML = '<path transform="translate(0, -15.674)" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>'
    btnCompleteTask.appendChild(svgCompleteTask)
  
    taskTitle.classList.add('title')
    taskTitle.innerHTML += title
    
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

    localStorage.setItem("task", title)
}
  



// $(function() {
//     // Count active items
//     function countItems() {
//         let items = $('main.page section.list-todo ul.list-items li.item').not('.completed').length;
//         $('span.count').text(items);
//     }

//     countItems();

//     // Create list item
//     $('input#input_new_todo').on('keyup', function (e) {
//         if (e.key === 'Enter' || e.keyCode === 13) {
//             if(!$(this).val()) {
//                 $('main.page').find('div.error-info').fadeIn('fast');
//             }
//             else {
//                 $('main.page').find('div.error-info').fadeOut('fast');
//                 $('main.page section.list-todo').find('ul.list-items')
//                     .append(
//                         '<li class="item" draggable="true"><button class="complete"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path transform="translate(0, -15.674)" fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></button><span class="title">' + $(this).val() + '</span><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button></li>'
//                     );
//             }
//             e.currentTarget.value = "";
//         }
//         countItems();
//     });

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
