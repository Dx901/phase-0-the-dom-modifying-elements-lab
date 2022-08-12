const main = document.getElementById("main");
main.remove();

const h1 = document.createElement("h1");
h1.id = "victory";

h1.innerHTML = "Dyes is the champion";
document.body.appendChild(h1);