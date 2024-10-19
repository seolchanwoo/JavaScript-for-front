
//자바 스크립트의 특징
//동적 타이핑
//자바 스크립트는 타입을 따로 지정을 
//자동으로 타입지정 해준다
const a = 10;
let b = 10;
console.log(a + b);
console.log("hello");

//타입 강제변환
//타입이 다를경우 자동으로 문자열로 맞춰 연산을 해준다
//+ 일땐 문자열의 문자열의 타입에 맞춰 변환
const c = 10;
const d = "hello";
console.log(c + d);

//const랑 let의 차이
//const는 상수 즉 한번 값을 할당하면 변경이 불가능한다
//let 유동적으로 변경이 가능

//null과 undefinded의 차이
//null은 값을 할당하기 전에 주로 사용된다
//undefinded는 값의 상태를 확인할때 주로 사용

//Arrays
//arrys가 없이 데이터 구조를 짤때
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const days = mon + thu + wed + thu + fri + sat + sun;
const daysArrays = [mon, thu, wed, thu, fri, sat, sun];
const typeArrays = [1, 2, "hello", false, true, undefined, null];
console.log(daysArrays, typeArrays);
daysArrays.log(daysArrays);

//object
const playerName = "nico";
const playerPoint = 1123123;
const playerHandsome = false;
const playerFat = "little bit";

//하나의 개체 표현을 왜 Array로 하지 않는 것인가
//객체의 필요성
//Object 사용방법
//객체를 만드는 기준??

const player = {
  Name: "nico",
  points: 10,
  fat: true,
}

console.log(player);
console.log(player.Name);
console.log(player.fat);
console.log(player.points);

//함수
//함수에 인자값을 보내 어떻게 전달하는지
//함수가 왜 필요한가
//장점이 뭔가
function sayHello() {

}