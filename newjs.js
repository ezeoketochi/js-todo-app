const task = document.getElementById("task");

let isPurchased = false;

let todos = [];

task.addEventListener("submit", (event) => {
  event.preventDefault();

  let taskName = document.getElementById((elementid = "taskName")).value;

  todoObj = {
    id: Math.floor(Math.random() * 100),
    isDone: false,
    task: taskName,
  };

  todos.push(todoObj);

  task.reset();

  populateArray();
});

function populateArray() {
  itemlist.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let itemlist = document.getElementById("itemlist");

    let newdiv = document.createElement("div");
    let html = `<input type="checkbox"  ${
      todos[i].isDone == true ? "checked" : "unchecked"
      // todos[i].isDone && "checked"
    } onchange = "toogleDone(${todos[i].id})"  
         /> <p>${todos[i].task}</p> <button  onClick = "deleteTodo(${
      todos[i].id
    })"  ><i class="fa fa-trash"></i></button>`;

    newdiv.innerHTML = html;

    newdiv.classList.add("items", `${todos[i].isDone && "done"}`);
    itemlist.append(newdiv);
  }
}

function deleteTodo(id) {
  let afterDelete = todos.filter((todo) => todo.id !== id);
  todos = afterDelete;
  populateArray();
}

function toogleDone(id) {
  console.log("toogle is clicked");
  let arr = todos.find((element) => element.id == id);

  arr.isDone === true ? (arr.isDone = false) : (arr.isDone = true);

  // arr.isDone = !arr.isDone;

  populateArray();

  console.log(arr, arr.isDone);
}
