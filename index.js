// Write your code here!
const body = document.body
body.removeChild(body.querySelector("main"));

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', "victory");
newHeader.innerHTML = "Paul is the champion";

//body.appendChild(newHeader);