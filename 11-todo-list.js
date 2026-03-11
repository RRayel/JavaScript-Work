const todoList = [{
    name:'Make Pancakes',
    dueDate: '2025-20-29'}, {name:'Workout', dueDate: '2025-10-29'}, {name:'Read a book', dueDate: '2025-10-29'}];

let todoListHTML ='';
//renderTodoList();
function renderTodoList()
{
    for(let i = 0; i<todoList.length; i++)
    {
            const todo = todoList[i];
            const html = `<div>${todo.name}</div> 
            <div>${todo.dueDate}</div>
            <button onclick = "
            todoList.splice(${i}, 1);
            renderTodoList();
            " class="delete-todo-button">Delete</button>
            `;
            todoListHTML += html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    todoListHTML =''; //clear the html string after rendering to avoid duplication
}


 function addTodo()
{
    const inputElement= document.querySelector('.js-name-input');//select the input element from html

    const dateInputElement= document.querySelector('.js-due-date-input');//select the due date input element from html

    const dueDate = dateInputElement.value;

    const name = inputElement.value; //get the value of the input element that the user typed
    todoList.push({
        name: name, 
        dueDate: dueDate});//adds the object with the name and due date to the todList array
    //console.log(todoList);

    inputElement.value= ''; //clear the input after the add button is clicked. 

    renderTodoList();//re-render the todo list to show the new item added
    
}


