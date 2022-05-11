자바스크립트란 웹 페이지 상에서 동적으로 요소를 변경하고, 사용자 인터페이스를 지원하기 위해 고안된 **스크립트 언어** 

불편한 점

- 문법이 애매한 부분이 많다.
- 자바스크립트를 이해할 수 있는 엔진은 브라우저마다 개별적으로 있기 때문에 동일한 코드임에도 불구하고, 각각의 엔진마다 동작이 다를 수 있는 여지도 있다.
- 매년마다 새로운 문법이 추가되고 있는데, 추가된 문법을 자바스크립트 엔진들이 바로 지원하기가 어렵기 때문에 오늘의 코드가 V8 엔진에선 동작하지만 JavaScriptCore(safari 브라우저에서 사용)엔진에선 동작하지 않을 수 있는 문제가 있다. 이런 문제를 `크로스 브라우징 문제` 라고 한다.

불편한 점이 있지만, 웹 페이지를 넘어서 백엔드, 데스크탑 프로그램, 모바일 앱 등 사용 범위가 넓어지고 있다. 

현재 크로스 브라우징 문제로 ES6 (ECMAScript 6) 기준으로 사용중

 자바스크립트 엔진

- 자바스크립트 언어를 이해하고, 실행하는 인터프리터
- 대표적으로 V8. 구글에서 만들었고, 크롬에 먼저 채택되어 electron, node.js에서 사용중

바닐라 JS는 자바스크립트 기반의 다양한 라이브러리(jquery) 보다 자바스크립트 자체의 기능만 쓰겠다는 의미이다

- jquery 코드를 쓴다고 했을 때, 라이브러리 사이즈가 커서 브라우저가 라이브러리를 가져오고, 실행이 가능하도록 `로드`하는데 시간이 오래걸린다. 구현할 때는 빠르고 편하지만, 결과적으로 웹 서비스 속도가 떨어지고, 사용자 경험에 안좋은 요소가 될 수 있다
- 바닐라 JS를 쓰는 경우에는 코드가 길어지는 문제가 있는데, 속도를 빠르게하면서 코드의 간결성을 위해 별도의 프레임워크를 사용한다.

네이밍 룰

- 변수, 함수, class 내부의 method > 맨 앞 소문자, 뒤에 나오는 단어 앞글자 모두 대문자
- 함수와 method는 getName 처럼 동사로 시작하면 좋음
- Bool 변수는 isVariable, hasData, areEqual 과 같이 동사를 써서 bool 변수임을 나타내면 좋다
    - 0일 때만 false
- class > 단어 맨 앞 모두 대문자

null과 undefined 

- null은 값이 없음을 나타내고, undefined는 변수로 설명하면 변수를 위한 공간은 있지만 값이 할당되지 않은 상태를 나타냄
- null > `const test = '';`
- null 주의

```jsx
let test = null;
console.log(typeof test, test); // **object** null
```

- undefined > `let test2;`
- undefined 참고

```jsx
let test2;
console.log(typeof test2, test2); // undefined undefined
```

객체

- 객체는 `프로퍼티`(파이썬에서는 속성)와 메서드로 이루어질 수 있다.
- 객체의 프로퍼티는 보통 프로퍼티 키와 값으로 이루어져 있다.
    - 참고로 HTML은 `속성`과 속성 값을 가질 수 있다 얘기하고, CSS는 `프로퍼티`로 이루어져 있고, 각 프로퍼티에 대응하는 프로퍼티 값으로 이루어져 있다고 얘기한다.

객체 생성 방법

- `**객체리터럴 방식**`

ES6에서 클래스 기반 객체 생성 문법을 지원하고 있음

- `**클래스 기반 객체 생성 문법**`
    - 부모 메서드를 덮어씌우는 객체지향의 다형성도 지원한다
    - 클래스도 객체이므로 기본적으로 `프로토타입` 이라는 프로퍼티를 가져서 프로토타입에 새로운 프로퍼티를 추가할 수 있다. 자바스크립트는 클래스 기반 객체 지향 언어가 아닌, 프로토타입 기반 객체지향 언어이기 때문에 이런 문법도 제공하지만 클래스 내부에서 선언하는 것을 권장한다.
    - 클래스 내부에서 선언한 프로퍼티인지 확인하기 위해 `hasOwnProperty(프로퍼티명)` 을 사용한다. ( 메소드는 확인 못함 )

```jsx
class Animal {
	constructor(name) {
		this.name = name;
	}
	get_message() {
		return "Hi";
	}
	get_message2() {
		return "Hello";
	}
}

class User extends Animal {
	constructor(name, brand) {
		super(name);
		this.brand = brand;
	}
	get_message() {
		return "Hi ssbinn"; 
	}
	get_message2(name) { // 호출됨
		return "Hello World";
	}
}

const ssbinn = new User('ssbinn', 20);
console.log(ssbinn.get_message2()); // Hello World
//이름이 같으면 덮어씌우기 때문에 인자 여부에 관계없이 자식 메서드가 호출된다
```

- 또 다른 방식인 `생성자 함수로 생성하는 방식` ( 참고 )
    - `프로토 타입`
        
        자바스크립트에서 함수는 객체. 함수가 선언될 때 해당 함수는 객체가 되어 기본적으로 `프로토타입` 이라는 프로퍼티를 가진다.
        
        따라서 프로토타입에 프로퍼티 명을 넣어서 추가적인 프로퍼티나 메서드를 정의할 수 있다.
        
    
    ```jsx
    function User(age) {
    	this.age = age;
    }
    User.prototype.message = function() {
    	return "Hello";
    }
    User.prototype.name = "ssbinn";
    
    const subin = new User(20);
    console.log(subin.age, subin.name, subin.message());
    ```
    

반복문

- for ...of 문 - 배열과 같이

```jsx
const data = ['ssbinn', 'lee'];
for (let item of data) {
	console.log(item);
}
```

- for ...in 문 - 객체와 같이

```jsx
const data = {
	name: "ssbinn",
	age: 20,
}

for (let key in data) {
	console.log(key); // 객체의 키 출력
	console.log(data[key]); // 객체의 값 출력
}
```

### 호이스팅 현상과 이유

- var 키워드와 함수 선언에서만 일어남

```jsx
console.log(a); // undefined
a=10;
console.log(a); // 10
var a = 20;
```

- 이 코드는 실제로 아래와 같이 동작함

```jsx
var a; // javascript는 변수와 함수의 선언을 실행 영역의 맨 앞으로 이동시켜 실행함
console.log(a); // undefined
a=10;
console.log(a); // 10
a = 20;
```

- 위 코드를 var 키워드가 아닌 let으로 고칠 경우, 첫번째 출력코드에서 a가 선언되지 않았다는 에러를 보임
- 호이스팅 이유
    - javascript는 변수와 함수의 선언 부분을 실행 영역의 맨 앞으로 이동해서 실행함
- 해결 방안
    - let, const만 사용할 것. 호이스팅이 var 키워드를 쓰지 않는 이유임
    - 함수 선언의 경우 함수 표현식으로 사용할 것

```jsx
// 함수 표현식 사용 예
getData(); // let으로 선언했기 때문에 선언되지 않았다는 에러를 보임

let getData = function() { ... } 
```

### 동기 / 비동기 처리

- 동기는 (syncronous) 요청을 보낸 후, 해당 요청의 응답을 받아야 다음 동작을 실행
- 비동기 (Asyncronous)는 요청을 보낸 후, 응답과 관계없이 다음 동작을 실행한다.
- 대부분의 프로그래밍 언어는 동기적 처리를 지향함. 자바스크립트도 동기적 처리가 기본이지만, 일부 기능은(실행이 오래걸리는 동작) 비동기적으로 처리가 가능하도록 기능을 추가로 제공하고 있다.

주요 비동기적 처리

- Rest API 요청
- 파일/데이터베이스 처리
- 타이머, 암호화/복호화 등

예시

```jsx
console.log('안뇽');
setTimeout (() => { // 비동기적 처리 함수
	console.log('ssbinn'); // 이 동작이 완료되지 않았는데
}, 3000);

console.log('룰루랄라'); // 이 코드가 먼저 실행됨
```

출력

```jsx
안뇽
룰루랄라
ssbinn
```

비동기처리의 문제점

- Rest API를 호출해서 결과 값을 받고, 그 결과 값을 기반으로 코드를 실행하는 경우를 예로들자. 해당 함수를 호출한 뒤 결과 값을 받지 않은 채로 다음 코드가 실행되면 전체 코드 실행에 영향을 끼칠 수 있음

해결 방법 - 콜백함수

- 자바스크립트에서 함수는 `first-class function` 이기 때문에 콜백함수를 만들 수 있음
    - 함수 자체를 변수에 저장 가능
    - 함수의 인자에 다른 함수를 인수로 전달 가능
    - 함수의 반환값에 함수를 전달 가능
- **콜백 함수를 first-class function을 이용해 사용하는 방법**

예시

```jsx
console.log('안뇽');

function desc(callback) {
	setTimeout (() => { 
		console.log('ssbinn'); 
		callback();
	}, 3000);
}
function desc2() {
	console.log('룰라랄라');
}

desc(desc2);
```

출력

```jsx
안뇽
ssbinn
룰루랄라
```

- 그렇지만 `콜백 지옥`의 또 다른 문제점이 생김

Promise

- ES6에서 공식적으로 추가된 문법으로, 비동기 처리를 위한 콜백함수의 단점(콜백지옥)을 극복하기 위해 제안됨
- then으로 계속계속 이어지는 코드넹
