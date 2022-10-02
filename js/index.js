const push = document.getElementById("push");
const tasks = document.getElementById("tasks");

// Create Element
function createTodo(input, index) {
  // Todo item tasks
  let item = document.createElement("div");
  item.setAttribute("class", "task");
  item.setAttribute("id", `item${index}`);
  tasks.appendChild(item);

  // Todo name field
  let item_input = document.createElement("span");
  item_input.setAttribute("class", "taskname");
  item_input.setAttribute("id", `item_input${index}`);
  item.appendChild(item_input);
  item_input.innerHTML = input;

  // // Todo edite button
  // let editButton = document.createElement("button");
  // editButton.setAttribute("class", "editButton");
  // editButton.setAttribute("onclick", `isEdite(${index})`);
  // item.appendChild(editButton);
  // editButton.innerHTML = "Edit";

  // Delete todo button
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButton");
  deleteButton.setAttribute("onclick", `isDelete(${index})`);
  item.appendChild(deleteButton);
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
}

push.addEventListener("click", addTodo);
// Create index number
let index = 0;
function addTodo() {
  const input = document.querySelector("input");
  if (input.value.length === 0) {
    return alert("Write some todo");
  }
  createTodo(input.value, index);
  input.value = "";
  index++;
}

// Delete todo function
function isDelete(index) {
  let removeElement = document.querySelector(`#item${index}`);
  removeElement.remove();
}

// Edite todo
function isEdite(index) {
  let editeElement = document.querySelector(`#item_input${index}`);
  const input = document.querySelector("input");
  input.value = editeElement.innerHTML;
}
