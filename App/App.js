// color changer app starts
const bgColourCode = document.querySelector(".bgcolour");
const colourBtn = document.querySelector(".change-colour");
const bgColourName = document.querySelector(".bgcolour");

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
colourBtn.addEventListener("click", () => {
  let newBg = "#";
  for (let i = 0; i < 6; i++) {
    newBg += arr1[Math.floor(Math.random() * arr1.length)];
  }
  bgColourName.innerHTML = newBg;
  document.body.style.backgroundColor = newBg;
});
// colour changer ends

// COUNTER APP STARTS
const counterInt = document.querySelector(".counter-int");
const buttons = document.querySelectorAll(".counter-btn ");
let count = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      counterInt.style.color = "red";
    } else if (count > 0) {
      counterInt.style.color = "green";
    } else {
      counterInt.style.color = "black";
    }
    counterInt.innerHTML = count;
  });
});
// COUNTER APP ENDS
