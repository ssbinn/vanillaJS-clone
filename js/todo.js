// #9 TODO List 만들기

const toDoForm = document.querySelector("#todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// const toDos = []; // 빈 배열로 선언 - newToDo 작성해서 form을 submit 할 때 마다 toDos.push(newTodo); 에서 빈 array에 push하기 때문에 덮어 씌워지는 문제 발생
let toDos = []; // 이전 todo 덮어 씌워짐 방지

const TODOS_KEY = "todos";

/*
JSON.stringify([1, 2, 3, 4]) // "[1,2,3,4]"
JSON.parse("[1,2,3,4]") // [1,2,3,4] - 원하는 배열 얻을 수 있음
*/
// 새로고침을 해도 없어지지 않게 todo list를 저장하자
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage는 text로만 저장함 - 단순 String으로 바꿔줌
}

function deleteToDo(event) {
    // 어떤 버튼(target)이 클릭 되었는 지 확인하고 싶어
    // console.log(event); 
    // console.log(event.target); // target - 클릭된 HTML element (<button>)
    // console.log(event.target.parentElement); // parentElement - 클릭된 element의 부모 (<li>)

    const li = event.target.parentElement;
    // console.log(typeof li.id); // String이네? - object 선언 때 id(Date.now)와 웹의 Application에 저장된 id의 type은 number로 기억함
    li.remove();
    
    // 클릭한 li의 id를 갖는 todo를 지우고, 다른 todo는 남겨두자
    toDos = toDos.filter((item) => item.id !== parseInt(li.id)); // item.id - number, li.id - String 타입
    saveToDos(); // **
}

/*
<ul id="todo-list">
    <li>
        <span>text(newTodo에 저장된 text -> newToDoObj 오브젝트의 text)</span>
        <button></button> // todo를 삭제하는 버튼을 만들기 위해 span 사용
    </li>
</ul>
paintToDo 함수에서 위와 같은 형태를 JS로 만들고 싶어 
*/
function paintToDo(newToDoObj){ // 기존 파라미터 newTodo -> newToDoObj
    const li = document.createElement("li"); // JS에서 HTML element 생성, tagName은 "li"
    li.id = newToDoObj.id; // **
    const span = document.createElement("span");
    const toDoDeleteButton = document.createElement("button");

    // span.innerText = newTodo;
    span.innerText = newToDoObj.text; // **
    toDoDeleteButton.innerText = "X";

    toDoDeleteButton.addEventListener("click", deleteToDo);
    
    li.appendChild(span); // li 태그 내부에 span 태그 만들기
    li.appendChild(toDoDeleteButton); 

    toDoList.appendChild(li); // HTML <ul id="todo-list"></ul> 안에 집어 넣기
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value; 
    toDoInput.value=""; // input칸에 입력한 value를 지우기 위함

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };

    // toDos.push(newTodo);
    // 문제 - toDos 배열이 ["a", "b", "a"] 이렇게 되어 있다면 관리하기 어렵겠지 - a를 지워야 하는 경우 등
    // 해결책 - string 대신에 object로 바꾸고, item을 구별하기 위해 todo들에게 랜덤 id 주기
    toDos.push(newToDoObj);

    // paintToDo(newTodo);
    paintToDo(newToDoObj);
    saveToDos(); // string으로 변환
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // 비어있으면 null임을 확인, String임을 확인

if (savedToDos !== null) {  // localStorage에 todo들이 있으면
    const parsedToDos = JSON.parse(savedToDos); // String에서 배열로 변환

    toDos = parsedToDos; // 이전 todo 덮어 씌워짐 방지

    // parsedToDos.forEach((item) => console.log("this is the turn of ", item)); 
    // foreach - array의 item에 대해 한개의 함수만 실행함, item - array에 있는 각각의 item
  
    parsedToDos.forEach(paintToDo); // foreach - paintToDo 함수를 배열 요소 각각에 대해 실행 - 이젠 item이 object가 됨
}

// array에서 삭제란, 지우고 싶은 item을 없애고 새 array를 만드는 일
// foreach처럼 배열 요소 각각에 대해 콜백 함수(sexyFilter)를 실행
// 만약 새 array에서 object를 유지하고 싶으면, 콜백 함수가 True를 리턴하도록 해야 함
// False를 리턴하면, 해당 item은 새 array에 포함되지 않음
/*
예제 
function sexyFilter() { return true; }
[1,2,3,4,5].filter(sexyFilter); // [1,2,3,4,5] 

function sexyFilter() { return false; }
[1,2,3,4,5].filter(sexyFilter); // []

function sexyFilter(item) { return item !== 3; } //3이 아니면 true 리턴
[1,2,3,4,5].filter(sexyFilter); // [1,2,4,5]
*/
