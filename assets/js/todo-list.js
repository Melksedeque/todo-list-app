$(function() {
    const main = () => {
        prepareDOMElements();
        prepareDOMEvents();
    }
    
    const prepareDOMElements = () => {
        toDoInput = document.querySelector('input[name="input_new_todo"]');
        errorInfo = document.querySelector('p.error-info');
        ulList = document.querySelector('section.list-todo ul.list-items');
    }
    
    const prepareDOMEvents = () => {
        toDoInput.addEventListener('keyup', enterKeyCheck);
        ulList.addEventListener('click', checkClick);
    }
    
    const addNewToDo = () => {
        if (toDoInput.value != ''){
            newToDo = document.createElement('li');
            newToDo.textContent = toDoInput.value;
            //dodajmey do naszego ToDo toolsy (przyciski)
            // createToolAreal();
            //dodajemy naszego ToDo do ul listy
            ulList.append(newToDo);
            
            //czyscimy error jak i input po dodaniu ToDo
            toDoInput.value = '';
            errorInfo.textContent = '';
        } else {
            errorInfo.addClass('alert alert-danger');
            errorInfo.textContent = 'Você não pode adicionar um item vazio!';
        }
    }
    
    //wykonujemy też dodanie todo na enterze
    const enterKeyCheck = (e) => {
        if(e.key == 'Enter'){
            addNewToDo();
        }
    }
    
    //funkcjs sprawdzająca w co klikamy (aby wiedziec czy zakonczyc task czy moze go usunac czy edytowac)
    const checkClick = (e) => {
        if(e.target.matches('.complete')){
            e.target.closest('li').classList.toggle('completed'); //po nacisnieciu complete do najblizszego elementu li (dziadka) dodajemy klase completed
            e.target.classList.toggle('completed');
    
        } else if (e.target.matches('.delete')) { //else if poniewaz gdybysmy klikneli wszedzie poza delete tez by sie wykonal warunek
            deleteToDo(e);
        }
    }
    
    const deleteToDo = (e) => {
        e.target.closest('li').remove();
    
        const allToDos = ulList.querySelectorAll('li');
        if (allToDos.length == 0) {
            errorInfo.textContent = 'Brak zadań na liście.'
        }
    }
    
    document.addEventListener('DOMContentLoaded', main);
});






