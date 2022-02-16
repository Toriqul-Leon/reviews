// !local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://pbs.twimg.com/profile_images/1399545969788731394/ag8nluwY_400x400.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://pics.awwmemes.com/doge-jobs-~mrs-doge-5262432.png",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://i.kym-cdn.com/photos/images/facebook/001/702/296/f2e.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEEOiH6L_4cHyG4c5NvpiTCKkd5GUhQvTWQ&usqp=CAU",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// !Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn");
const nexBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// !Load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// !Show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// !Set starting item
let currentItem = 0;

// !Show Next
nexBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// !Show Previous
preBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// !Random choose
randomBtn.addEventListener("click", function () {
  currentItem = randomNumber();
  showPerson();
});

function randomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
