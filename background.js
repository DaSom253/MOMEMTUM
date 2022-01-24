const images = [
    "0.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg",
    "7.jpg",
    "9.jpg"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${chosenImage}`;
document.body.appendChild(backgroundImg);