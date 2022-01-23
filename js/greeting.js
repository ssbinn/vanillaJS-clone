// 참고문서 : https://ofcourse.kr/js-course/JavaScript-%EC%9E%85%EB%AC%B8

// #1 HTML elements 가져오기

// const loginForm = document.getElementById("login-form"); 
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form"); //# - id일 때 
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // CSS에서 작성한 hidden class

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // console.dir(loginInput); // loginInput 의 내부에서(object에서) value 속성 찾음
    const username = loginInput.value;
    
    // #2 user가 입력하는 값의 유효성 검사하기
    // if (username == ""){
    //     alert("Please write your name");
    // } else if (username.length > 15){
    //     alert("Your name is too long");
    // }
    // 이렇게 JS에서 하는 것보다 HTML에서 제공해주는 것을 사용하자 -> form submit event 문제 발생

    // #3 form의 submit event 해결하기 
    // console.log(username); //form을 submit할 때, 입력 값을 받아냄 - submit event를 감지하는 것을 확인했지만, 브라우저 새로고침은 못막음
    
    // submit event가 발생할 때, JS는 EventListener function을 호출하는데
    // 첫번째 argument에 event object(event로 부터 받은 정보)를 담아서 호출함 (onLoginSubmit({clientInforation})) 
    // 'event' 파라미터를 생성해보자
    event.preventDefault(); // form의 기본 동작인 submit을 막음 - submit event에 대한 브라우저의 기본 동작은 페이지 새로고침
    // console.log(event);

    // #4 로그인한 뒤 form은 숨기고, 타이틀(h1) 표시하기
    loginForm.classList.add(HIDDEN_CLASSNAME); // CSS 이용해서 form 숨기기 - classList 주의

    localStorage.setItem(USERNAME_KEY, username); // 유저정보 저장하기 - key, value

    paintGreetings(username); // 타이틀(h1) 표시하기 - 여기선 input으로 부터 유저정보 받음

}

function paintGreetings(username) {
    greeting.innerText = `Hi ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// #5 Saving & Loading Username - localStorage API
// local storage에 유저 정보가 없으면, form 출력
// 유저 정보가 있으면, form 숨기고 h1 출력 (새로고침 상관없이**)

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername); // local storage에 유저 정보가 없으면 null 리턴함

if (savedUsername == null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // event API - submit은 버튼(또는 enter)를 눌렀을 때 발생 

} else {
    // show the greetings
    paintGreetings(savedUsername); // 여기선 localStorage로 부터 유저정보 받음
}