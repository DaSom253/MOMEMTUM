const clock = document.querySelector("span");
const day = document.querySelector("h3");
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    let ampm = hours >= 12 ? 'PM' : 'AM';
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dateDate = String(date.getDate()).padStart(2, "0");
    const dayDay = week[date.getDay()];
    clock.innerText = `${ampm} ${hours} : ${minutes} . ${seconds}`;
    day.innerText = `${year}.${month}.${dateDate}. ${dayDay}`;
}

setInterval(getClock, 1000);
//.size2 {
 //    width: 31%;
 //   height: 20px;
  //  border: 1px solid;
  //  margin: 1%;
//}