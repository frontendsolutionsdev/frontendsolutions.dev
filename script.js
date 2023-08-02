const x = document.querySelector(":root");
const dark = ["#222831", "#393e46", "#eeeeee"];
const light = ["#eeeeee", "#D7D7D7", "#222831"];

let mode = true;

// - Switch button icon
// - Change variables to new colours

function modeChange() {
  if (mode === true) {
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
    x.style.setProperty("--primary", light[0]);
    x.style.setProperty("--secondary", light[1]);
    x.style.setProperty("--tertiary", light[2]);
    mode = false;
  } else {
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
    x.style.setProperty("--primary", dark[0]);
    x.style.setProperty("--secondary", dark[1]);
    x.style.setProperty("--tertiary", dark[2]);
    mode = true;
  }
}

function changeActive(e) {
  if (document.querySelector('nav .active') !== null) {
    document.querySelector('nav .active').classList.remove('active');
  }
  e.target.classList.add("active");
}

let active = "home";


function displayHomePage() {
  const homePage = document.getElementById("home-page");
  const activePage = document.getElementById("active-page");
  if (active !== "home") {
    document.querySelector(".active-page").classList.remove("active-page");
    homePage.classList.add("active-page");
    active = "home";
  }
}

function displayAboutPage() {
  const aboutPage = document.getElementById("about-page");
  const activePage = document.getElementById("active-page");
  if (active !== "about") {
    document.querySelector(".active-page").classList.remove("active-page");
    aboutPage.classList.add("active-page");
    active = "about"
  }
}

function displayPortfolioPage() {
  const portfolioPage = document.getElementById("portfolio-page");
  const activePage = document.getElementById("active-page");
  if (active !== "portfolio") {
    document.querySelector(".active-page").classList.remove("active-page");
    portfolioPage.classList.add("active-page");
    active = "portfolio"
  }
}

function displayBlogPage() {
  const blogPage = document.getElementById("blog-page");
  const activePage = document.getElementById("active-page");
  if (active !== "blog") {
    document.querySelector(".active-page").classList.remove("active-page");
    blogPage.classList.add("active-page");
    active = "blog"
  }
}

function displayContactPage() {
  const contactPage = document.getElementById("contact-page");
  const activePage = document.getElementById("active-page");
  if (active !== "contact") {
    document.querySelector(".active-page").classList.remove("active-page");
    contactPage.classList.add("active-page");
    active = "contact"
  }
}