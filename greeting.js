const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubClick(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintingGreetings(username)
}

function paintingGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `HELLO, ${username}`;
}

const saveUsername =  localStorage.getItem(USERNAME_KEY);
if (saveUsername === null) {
    // show the farm
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubClick);
} else {
    //show greeting
    paintingGreetings(saveUsername);
}