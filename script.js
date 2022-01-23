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
    console.log(username);
}

function paintingGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `HELLO ${username}`;
}

const saveUsername =  localStorage.getItem("USERNAME_KEY");
if (saveUsername === null) {
    // show the farm
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubClick);
} else {
    //show greeting
    paintingGreetings(saveUsername)
}

const clock = document.querySelector("h2");
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} . ${seconds}`;
}

setInterval(getClock, 1000);

const quotes = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]