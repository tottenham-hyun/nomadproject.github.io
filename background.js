const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const body = document.querySelector("body");

const choseImage = images[Math.floor(Math.random()*images.length)];
body.style.backgroundImage = `url("img/${choseImage}")`;
