let arr = [];

const todoInput = document.querySelector(".todo-input");
const addTodoButton = document.querySelector(".add-todo-button");

const todoList = document.querySelector(".todo-list");

// Add todo
addTodoButton.addEventListener("click", function (event) {
  event.preventDefault();
  const todo = todoInput.value;
  const todoWrapper = document.createElement("span");
  todoWrapper.classList.add("todo-wrapper");

  // Check for todo so it doesn't get added to the list if it is empty
  if (todo.length > 0) {
    todoList.appendChild(todoWrapper);
    // Push todo to array
    arr.push(todo);
    // Store todo in local storage
    localStorage.setItem("todo", JSON.stringify(arr));
  }

  // Checkbox
  const checkBox = document.createElement("input");
  checkBox.classList.add("checkbox");
  checkBox.type = "checkbox";
  checkBox.checked = false;
  todoWrapper.appendChild(checkBox);

  // New todo
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = todo;
  todoWrapper.appendChild(todoItem);
  todoInput.value = "";

  // Delete todo button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "X";
  todoWrapper.appendChild(deleteButton);
  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();
    todoWrapper.remove();
  });
  // Checkbox event listener
  checkBox.addEventListener("click", function (event) {
    if (checkBox.checked === true) {
      todoItem.style.textDecoration = "line-through";
    } else {
      todoItem.style.textDecoration = "none";
    }
  });
});

(() => {
  // Get todos from local storage
  const todo = localStorage.getItem("todo");

  if (todo === null) {
    return;
  } else {
    const todoArr = JSON.parse(todo);
    todoArr.forEach((todo) => {
      const todoWrapper = document.createElement("span");
      todoWrapper.classList.add("todo-wrapper");

      // Check for todo so it doesn't get added to the list if it is empty
      if (todo.length > 0) {
        todoList.appendChild(todoWrapper);
      }

      // Checkbox
      const checkBox = document.createElement("input");
      checkBox.classList.add("checkbox");
      checkBox.type = "checkbox";
      checkBox.checked = false;
      todoWrapper.appendChild(checkBox);

      // New todo
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo-item");
      todoItem.innerHTML = todo;

      todoWrapper.appendChild(todoItem);
      todoInput.value = "";

      // Delete todo button
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerHTML = "X";
      todoWrapper.appendChild(deleteButton);
      deleteButton.addEventListener("click", function (event) {
        event.preventDefault();
        // I left off here
      });

      // Checkbox event listener
      checkBox.addEventListener("click", function (event) {
        if (checkBox.checked === true) {
          todoItem.style.textDecoration = "line-through";
        } else {
          todoItem.style.textDecoration = "none";
        }
      });
    });
  }
})();
