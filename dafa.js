
// //자바 스크립트의 특징
// //동적 타이핑
// //자바 스크립트는 타입을 따로 지정을
// //자동으로 타입지정 해준다
// const a = 10;
// let b = 10;
// console.log(a + b);
// console.log("hello");

// //타입 강제변환
// //타입이 다를경우 자동으로 문자열로 맞춰 연산을 해준다
// //+ 일땐 문자열의 문자열의 타입에 맞춰 변환
// const c = 10;
// const d = "hello";
// console.log(c + d);

// //const랑 let의 차이
// //const는 상수 즉 한번 값을 할당하면 변경이 불가능한다
// //let 유동적으로 변경이 가능

// //null과 undefinded의 차이
// //null은 값을 할당하기 전에 주로 사용된다
// //undefinded는 값의 상태를 확인할때 주로 사용

// //Arrays
// //arrys가 없이 데이터 구조를 짤때
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const days = mon + thu + wed + thu + fri + sat + sun;
// const daysArrays = [mon, thu, wed, thu, fri, sat, sun];
// const typeArrays = [1, 2, "hello", false, true, undefined, null];
// console.log(daysArrays, typeArrays);
// daysArrays.log(daysArrays);

// //object
// const playerName = "nico";
// const playerPoint = 1123123;
// const playerHandsome = false;
// const playerFat = "little bit";

// //하나의 개체 표현을 왜 Array로 하지 않는 것인가
// //객체의 필요성
// //Object 사용방법
// //객체를 만드는 기준??

// const player = {
//   Name: "nico",
//   points: 10,
//   fat: true,
// }

// console.log(player);
// console.log(player.Name);
// console.log(player.fat);
// console.log(player.points);

// //함수
// //함수에 인자값을 보내 어떻게 전달하는지
// //함수가 왜 필요한가
// //장점이 뭔가

// //함수를 쓰지 않았을때
// const addResult = 5 + 10;

// console.log(addResult);

// const addResult1 = 10 + 1;
// console.log(addResult1);

// //함수 사용시
// function addNumbers(a, b) {
// return a + b;
// }
// console.log(addNumbers(5, 10));  // 15
// console.log(addNumbers(20, 30)); // 50

// //return을 사용 안할 시
// //함수의 내부에서 console.log 사용
// function addNumbers(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// console.log(addNumbers(5, 10));  // 15
// console.log(addNumbers(20, 30)); // 50

// //if else
// // const age = prompt("How old are you?");
// //반응형 컴포넌트를 만드는 이유
// //사용자에게 맞게 커스텀으로 재사용 하기 위해
// // console.log(age);
// // console.log(typeof (age));
// //value해당 값을 확인 할려면 typeof()
// //타입 변경하는 방법
// //문자열을 number로 바꾸는 방법
// //사용이유
// //유저가 입력한 값이 정수형인지 아닌지 판별
// //아닐 시 사용자가 인지를 할 수 있도록 확인해줄 수 있다
// //if문의 동작방식

// //else if 좀 더 세부적으로 조건을 나누기 위해 사용
// const age = parseInt(prompt("How old are you?"));
// // console.log(typeof age);
// console.log(isNaN(age));

// //Number 타입이 아니거나 age가 음수이면
// if (isNaN(age) || age < 0) {
//   console.log("please write a real positive number");
// }
// else if (age < 18) {
//   console.log("You are too young");
// }
  
// else if (age >= 18 && age <= 50) {
//   console.log("You can drinkt");
// }
// else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// }
// else if (age > 80) {
//   console.log("You can do whatever you want");
// }
  
// else if (age === 100) {
//   console.log("wow you are wise");
//   }
// else {
//   console.log("Please writea number");
// }

//브라우저의 이해 및 동작원리
//DOM 객체
//자바 스크립트는 HTML을 읽어와 dom 객체로 변환
//DOM 객체형태로 구성되어 있다
// const title = document.getElementById("title");
// // console.dir(title);
// title.innerText = "Got you";

//className으로 호출하면 여러개의 값 호출가능
//반환값은 리스트 형태
// const title = document.getElementsByClassName("h1");
// console.log(title);
// title.textContent = "Hello";

//querySelector는 1개의 element를 가져온다
//querySelectorAll 여러 개의 element를 가져온다
// const title = document.querySelector(".hello h1 h2 h3");
// title.textContent = "Hello";
// const h2 = document.querySelector('.h1');
// h2.textContent = "Hello";

// const hello = document.querySelectorAll('.hello');
// console.log(hello);

//자바 스크립트로 dom객체에 접근하여
//버튼 클릭시 색상 전환 예제
const title = document.querySelector("div.hello:first-child h1");

function handleEvent() {
  // const currentColor = title.style.color;
  // let newColor;
  
  // if (currentColor === 'blue') {
  //   newColor = "tomato";
  // }

  // else {
  //   newColor = "blue";
  // }
  // title.style.color = newColor;

  title.className = "active";
}

title.addEventListener("click",handleEvent);

