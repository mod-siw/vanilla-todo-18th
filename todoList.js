// 초기화 함수
const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

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

  todoItem.className = "todo-list-item";
  todoText.className = "todo-item-text";
  todoText.innerText = text;

  // li에 item 추가
  todoItem.appendChild(todoText);
  document.querySelector(".todo-list").appendChild(todoItem);

  // input 창 초기화
  document.querySelector(".todo-input").value = "";
};

// 시작 함수
init();
