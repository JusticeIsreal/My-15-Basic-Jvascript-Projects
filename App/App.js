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

window.addEventListener("DOMContentLoaded", () => {
  switchCOlor();
});

const saveNumber = (num) => {
  localStorage.setItem("countKey", JSON.stringify(num));
};

const retrivedCount = JSON.parse(localStorage.getItem("countKey"));

let count = retrivedCount;

counterInt.textContent = count;

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
    counterInt.innerHTML = count;

    switchCOlor();
    saveNumber(count);
  });
});

const switchCOlor = () => {
  if (count < 0) {
    counterInt.style.color = "red";
  } else if (count > 0) {
    counterInt.style.color = "green";
  } else {
    counterInt.style.color = "black";
  }
};
// COUNTER APP ENDS

// REVIEWS SLIDER PROJECT

const reviews = [
  {
    id: 1,
    name: "Justice Isreal",
    Job: "Software Developer",
    img: "img/img1.png",
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis? Non, quia doloremque. Ipsum amet laudantium ex veniam quaerat quo?",
  },
  {
    id: 2,
    name: "Jesuit Agbonma",
    Job: "Electical Engineer",
    img: "img/img2.png",
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis? Non, quia doloremque. Ipsum amet laudantium ex veniam quaerat quo?",
  },
  {
    id: 3,
    name: "Isreal Oziegbe",
    Job: "Medical Doctor",
    img: "img/img3.png",
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis? Non, quia doloremque. Ipsum amet laudantium ex veniam quaerat quo?",
  },
  {
    id: 4,
    name: "Jason Jennifer",
    Job: "School Teacher",
    img: "img/img4.png",
    About:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis? Non, quia doloremque. Ipsum amet laudantium ex veniam quaerat quo?",
  },
];
let customerImg = document.querySelector(".customer-img");
let CustomerName = document.querySelector(".customer-name");
let customerJob = document.querySelector(".customer-job");
let about = document.querySelector(".about");
let next = document.querySelector(".next-img");
let prev = document.querySelector(".prev-img");
let random = document.querySelector(".random-btn");
let slide = document.querySelector(".slide");

// initial array value
var currentReview = 1;
window.addEventListener("DOMContentLoaded", () => {
  customerSlider();
});

const customerSlider = () => {
  let customers = reviews[currentReview];
  // console.log(customers);
  customerImg.src = customers.img;
  CustomerName.innerHTML = customers.name;
  customerJob.innerHTML = customers.Job;
  about.innerHTML = customers.About;
};

next.addEventListener("click", () => {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  customerSlider();
  slide.innerHTML = currentReview;
});
prev.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  customerSlider();
  slide.innerHTML = currentReview;
});
random.addEventListener("click", () => {
  currentReview = Math.floor(Math.random() * reviews.length);
  customerSlider();
  slide.innerHTML = currentReview;
});
// REVIEW SLIDER END

// LOCAL STORAGE
localStorage.setItem("key", JSON.stringify(reviews));

const project = JSON.parse(localStorage.getItem("key"));

console.log(project);
