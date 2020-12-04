//crousels

$(".owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  items: 1,
  autoplay: false,
});
$(".owl-carousel-2").owlCarousel({
  loop: true,
  dots: true,
  nav: true,
  items: 1,
  autoplay: true,
});
$(".owl-carousel-3").owlCarousel({
  loop: true,
  dots: true,
  nav: true,
  items: 1,
  autoplay: true,
});

//fix navbar

let navbar = document.getElementById("navbar");

window.onscroll = () => {
  fixNav();
};

const fixNav = () => {
  if (window.pageYOffset >= 500) {
    navbar.classList.add("fix");
  } else {
    navbar.classList.remove("fix");
  }
};

//nav underline

const underline = document.querySelector(".underline");
const li = document.querySelectorAll("nav li");
const live = document.querySelector(".live-classes");

underline.style.left = live.offsetLeft + "px";
underline.style.width = live.offsetWidth + "px";

function changeHandler(e) {
  underline.style.left = e.offsetLeft + "px";
  underline.style.width = e.offsetWidth + "px";
}

li.forEach((element) => {
  element.addEventListener("click", () => {
    changeHandler(element);
  });
});

//toggle Btn

const burgerBtn = document.getElementById("nav-icon1");
const sideNavbar = document.querySelector(".sideNavbar");
const backdrop = document.querySelector(".backdrop");

const toggleHandler = () => {
  burgerBtn.classList.toggle("open");
  sideNavbar.classList.toggle("open");
  backdrop.classList.toggle("open");
};

burgerBtn.addEventListener("click", () => {
  toggleHandler();
});

backdrop.addEventListener("click", () => {
  toggleHandler();
});
