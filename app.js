//getElementById를 통해div접근하여
//자식의 엘리멘트를 연결하는 방법
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const a = document.querySelector("a");
// const value = document.querySelector("#login-form p");
console.log(a)
console.log(loginInput)
console.log(loginForm)
function buttonEvent(event) {
  event.preventDefault();
  console.log(event.target)

  const value = loginInput.value;
  console.log(value);
  

}
loginForm.addEventListener("submit", buttonEvent);

