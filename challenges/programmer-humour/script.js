const button = document.createElement("button");
button.innerHTML = "Fun Facts!";
document.body.appendChild(button);

let element = document.createElement("div");
document.body.appendChild(element);

let funText = document.createElement("p");
let funImage = document.createElement("img");

button.addEventListener("click", getFunFact);

async function getFunFact() {
  try {
    let response = await fetch("https://xkcd.now.sh/?comic=latest");
    let data = await response.json();
    funText.innerText = data.transcript;
    funImage.src = data.img;
    element.appendChild(funText);
    element.appendChild(funImage);
  } catch (err) {
    console.log("Error");
  }
}