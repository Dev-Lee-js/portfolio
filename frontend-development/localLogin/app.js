const loginForm = document.querySelector("form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(e){
    e.preventDefault();
    const username = loginInput.value
    console.log(username)
} 

loginButton.addEventListener("click",onLoginBtnClick)

 