// Your code goes here
const navLinks = document.querySelectorAll('.nav a');

const navHoverHandler = function (event) {
  if (event.target.style.color = ' ') {

    event.target.style.color = 'red ';
  } else {
    event.target.style.color = 'black '
  }
};

navLinks.forEach((hover) => {
  hover.addEventListener('mouseover', navHoverHandler);
})

function display(event) {
  event.target.style.filter = 'grayscale(100%)
}

const introLogo = document.querySelector(".intro img");
introLogo.addEventListener('wheel', display);


let headerLogo = document.querySelector('.logo-heading');
headerLogo.forEachd

