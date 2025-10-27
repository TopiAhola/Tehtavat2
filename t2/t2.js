// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const listElem = document.querySelectorAll('ul')[0];
for (let item of todoList) {
  let liElem = document.createElement("li");


  let inputElem = document.createElement("input");
  inputElem.setAttribute("type", "checkbox");
  inputElem.setAttribute("id", item.id);
  item.completed ? inputElem.setAttribute("checked","true") : {} ;

  let labelElem = document.createElement("label");
  labelElem.setAttribute("for", item.id);
  labelElem.innerHTML = item.task;

  liElem.append(inputElem,labelElem);
  listElem.append(liElem);
}
