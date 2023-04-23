const task = document.getElementById("task");
const items = document.getElementById("itemlist");
let isPurchased = false;
let TODOS_STORE = [];

task.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let taskName = document.getElementById((elementid = "taskName")).value;

  const todoObj = {
    id: Math.floor(Math.random() * 100),
    isDone: false,
    task: taskName,
  };

  TODOS_STORE.push(todoObj);
  task.reset();
  renderArray();
}

function renderTask(data) {
  let newdiv = document.createElement("div");
  newdiv.classList.add("items", `${data.isDone && "done"}`);
  newdiv.innerHTML = `<input type="checkbox" ${
    data.isDone && "checked"
  } onChange="toggleIsDone(${data.id})"/><p>${
    data.task
  }</p> <button onClick="deleteTodo(${
    data.id
  })"><i class="fa fa-trash"></i></button>`;
  return newdiv;
}

function renderArray() {
  items.innerHTML = null;
  for (let i = 0; i < TODOS_STORE.length; i++) {
    const item = renderTask(TODOS_STORE[i]);
    items.append(item);
  }
}

function deleteTodo(id) {
  let newTodos = TODOS_STORE.filter((todo) => todo.id !== id);
  TODOS_STORE = newTodos;
  renderArray();
}

function toggleIsDone(id) {
  let todo = TODOS_STORE.find((todo) => todo.id === id);
  todo.isDone = !todo.isDone;
  renderArray();
}
