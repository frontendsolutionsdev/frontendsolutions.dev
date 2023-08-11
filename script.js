// Callum

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
    document.getElementById("mobile-sun").style.display = "block";
    document.getElementById("mobile-moon").style.display = "none";
    x.style.setProperty("--primary", light[0]);
    x.style.setProperty("--secondary", light[1]);
    x.style.setProperty("--tertiary", light[2]);
    mode = false;
  } else {
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
    document.getElementById("mobile-sun").style.display = "none";
    document.getElementById("mobile-moon").style.display = "block";
    x.style.setProperty("--primary", dark[0]);
    x.style.setProperty("--secondary", dark[1]);
    x.style.setProperty("--tertiary", dark[2]);
    mode = true;
  }
}

let active = "home";
const mobile = document.getElementById("mobileNav");


function displayHomePage() {
  if (active !== "home") {
    document.querySelector(".active-page").classList.remove("active-page");
    document.getElementById("home-page").classList.add("active-page");

    document.querySelector(".active").classList.remove("active");
    document.getElementById("home").classList.add("active");

    document.getElementById("mobileNav").querySelector(".active").classList.remove("active");
    document.getElementById("mobile-home").classList.add("active");
    active = "home";
  }
}

function displayAboutPage() {
  if (active !== "about") {
    document.querySelector(".active-page").classList.remove("active-page");
    document.getElementById("about-page").classList.add("active-page");

    document.querySelector(".active").classList.remove("active");
    document.getElementById("about").classList.add("active");

    document.getElementById("mobileNav").querySelector(".active").classList.remove("active");
    document.getElementById("mobile-about").classList.add("active");
    active = "about"
  }
}

function displayPortfolioPage() {
  if (active !== "portfolio") {
    document.querySelector(".active-page").classList.remove("active-page");
    document.getElementById("portfolio-page").classList.add("active-page");

    document.querySelector(".active").classList.remove("active");
    document.getElementById("portfolio").classList.add("active");

    document.getElementById("mobileNav").querySelector(".active").classList.remove("active");
    document.getElementById("mobile-portfolio").classList.add("active");
    active = "portfolio"
  }
}

function displayBlogPage() {
  if (active !== "blog") {
    document.querySelector(".active-page").classList.remove("active-page");
    document.getElementById("blog-page").classList.add("active-page");

    document.querySelector(".active").classList.remove("active");
    document.getElementById("blog").classList.add("active");

    document.getElementById("mobileNav").querySelector(".active").classList.remove("active");
    document.getElementById("mobile-blog").classList.add("active");
    active = "blog"
  }
}

function displayContactPage() {
  if (active !== "contact") {
    document.querySelector(".active-page").classList.remove("active-page");
    document.getElementById("contact-page").classList.add("active-page");

    document.querySelector(".active").classList.remove("active");
    document.getElementById("contact").classList.add("active");

    document.getElementById("mobileNav").querySelector(".active").classList.remove("active");
    document.getElementById("mobile-contact").classList.add("active");
    active = "contact"
  }
}

// Display the navigation menu on mobile

function displayMobileNavigation() {
  let nav = document.getElementById("mobileNav")
  if (nav.style.display === "flex") {
    nav.style.display = "none"
  } else {
    nav.style.display = "flex"
  }
}
