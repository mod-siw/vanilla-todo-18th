// 초기화 함수
const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

/* todo 추가 + 삭제 기능 */

// 할 일 추가 함수
const addTodoItem = () => {
  event.preventDefault();
  // input에 입력한 value를 선택하여 todoContent에 대입
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) {
    printTodoItem(todoContent);
  } else {
    alert("할 일을 입력하세요!");
  }
};

// 입력 받은 할 일 출력
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");

  todoItem.className = "todo-list-item";
  todoText.className = "todo-item-text";
  todoText.innerText = text;

  // todo 삭제 + 이동
  todoDel.innerText = "X";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".todo-list").appendChild(todoItem);

  // input 창 초기화
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제
const deleteTodoItem = (e) => {
  const target = e.target.parentNode; //해당 todo item 다 삭제해야 하므로 이동
  document.querySelector(".todo-list").removeChild(target);
};

// 시작 함수
init();
