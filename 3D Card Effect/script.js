const container = document.querySelector(".container");
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");
const purchaseBtn = document.querySelector(".purchase-btn");

container.addEventListener("mousemove", (e) => {
  let X = (window.innerWidth / 2 - e.pageX) / 30;
  let Y = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transition = "none";
  card.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  heading.style.transform = `translateZ(45px)`;
  purchaseBtn.style.transform = `translateZ(75px)`;
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "transform 0.75s";
  card.style.transform = "none";
  heading.style.transform = "none";
  purchaseBtn.style.transform = "none";
});
