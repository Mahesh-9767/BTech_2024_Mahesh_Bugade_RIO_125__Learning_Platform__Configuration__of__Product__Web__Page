'use strict';



/**
 * add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});



/**
 * NAVBAR TOGGLER FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * 
 * add active class on header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);




 // JavaScript function to open the PDF link
 function openTermsLink() {
  window.open("https://www.tcsion.com/dotcom/ICMP/layout/Microsite/iDLH_Privacy_Policy_Document_Current.pdf", "_blank");
}


// Banner code for split 
const slider = document.querySelector('.banner-slider');
let counter = 1;
const slides = slider.children;
const slideCount = slides.length;
let slideWidth = slides[0].clientWidth;

// Dynamically set the width of the container to accommodate all slides
slider.style.width = `${slideWidth * slideCount}px`;

setInterval(() => {
  slider.style.transform = `translateX(-${slideWidth * counter}px)`;
  counter++;
  if (counter === slideCount) {
    counter = 0;
  }
}, 2000); // Change slide every 2 seconds (2000 milliseconds)



// Attach click event listener to the terms link
document.getElementById("terms-link").addEventListener("click", openTermsLink);


// login split
const loginBtn = document.querySelector(".btn");
const loginDiv = document.querySelector(".login");
loginBtn.addEventListener("click",()=>{
  loginDiv.style.maxHeight="500px";
});



/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


// google , twitter , facebook link 
document.getElementById('facebook-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  window.location.href = 'https://www.facebook.com'; // Redirect to the Facebook page
});

document.getElementById('twitter-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  window.location.href = 'https://www.twitter.com'; // Redirect to the Twitter page
});

document.getElementById('google-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  window.location.href = 'https://www.google.com'; // Redirect to the Google page
});
