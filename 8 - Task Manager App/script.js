/* 
    1. Accessing / Targetting
    2. Handling Events
    3. Functionality
*/

// Step 1
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3

/* 
    1. create element
    2. give classes/text/attributes
    3. append to an EXISTING element
*/
function addTodo(e) {
    // stop the page from refreshing
    e.preventDefault();

    if (todoInput.value !== "") {
        // Step 1
        const todoDiv = document.createElement("div");
        const newTodo = document.createElement("li");
        const completeButton = document.createElement("button");
        const trashButton = document.createElement("button");

        // Step 2
        // todoDiv
        todoDiv.classList.add("todo");

        // newTodo
        newTodo.textContent = todoInput.value;
        newTodo.classList.add("todo-item");

        // completeButton
        completeButton.innerHTML = "<i class='fas fa-check'></i>"
        completeButton.classList.add("complete-btn");

        // trashButton
        trashButton.innerHTML = "<i class='fas fa-trash'></i>"
        trashButton.classList.add("trash-btn");

        // Step 3
        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(completeButton);
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);

        // Clear the input when done
        todoInput.value = "";
    }
}

function deleteOrCompleteTodo(e) {
    // console.log(e.target.parentElement);
    // console.log(e.target.classList[0]);
    // console.log(e.target.classList.contains("trash-btn"));
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall");

        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    } else if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        // add if not existing, remove if existing
        todo.classList.toggle("completed");
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    })
}