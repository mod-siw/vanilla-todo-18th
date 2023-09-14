// 초기화 함수
const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
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
  todoText.addEventListener("click", toggleTodoToDone);

  // todo 삭제
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

/* todo -> done 이동 + done 표시 */

// todo -> done 이동
const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneText.innerText = text;
  doneText.className = "done-item-text";
  doneText.addEventListener("click", toggleDoneToDo);

  doneDel.innerText = "X";
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteDoneItem);

  doneItem.className = "done-list-item";
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-list").appendChild(doneItem);
};

// 끝낸 일 삭제
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};

// done -> todo 이동
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

/* 입력창 팝업 토글 */
const btn = document.querySelector(".popup-button");

const displayForm = () => {
  if (form.style.display === "none") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
};

// 시작 함수
init();
