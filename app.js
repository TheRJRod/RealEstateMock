// Declaring Variables
const house = document.querySelector('.house');
const branch1 = document.querySelector('.branch1');
const branch2 = document.querySelector('.branch2');
const topText = document.querySelector('.toptext');
const bottomText = document.querySelector('.bottomtext');
const hill = document.querySelector('.hill');
const headerbtn = document.querySelector('.headerbtn')

// Resets Scroll Position to keep page formated correctly
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}



window.addEventListener('load', () => {
  
  // House Transition
  house.style.width = '80%';

  // Branches Transition
  branch1.style.left = '-6%';
  branch2.style.left = '70%';

  // Text Transition
  topText.style.left = '54%';
  bottomText.style.left = '64%';

  // Button Transition
  headerbtn.style.left = '78%';

  // Hill Transition
  hill.style.width = '50%';

})

headerbtn.addEventListener('click', () => {
  const propertySection = document.querySelector('.propertysection');
  propertySection.scrollIntoView({behavior:'smooth', block:'center'});
})



// PROPERTY SECTION

// Declaring variables
const home1 = document.querySelector('.home1');
const home2 = document.querySelector('.home2');
const home3 = document.querySelector('.home3');
const dot = document.querySelector('.dot')

home1.addEventListener('click', () => {
  dot.style.left = "-17%";
  home1.style.left = "36%"
  home1.style.top = "3%"
  home1.style.width = "80%"
  home1.style.zIndex = "3"
})


// TOUR SECTION

// Declaring Variables
const bookbtn = document.querySelector('.bookbtn');
const housetour = document.querySelector('.housetour');
const branchtour1 = document.querySelector('.branchtour1');
const branchtour2 = document.querySelector('.branchtour2');
const dot2 = document.querySelector('.dot2')

bookbtn.addEventListener('click', () => {
  const tourSection = document.querySelector('.toursection');
  tourSection.scrollIntoView({behavior:'smooth', block:'end'});
  housetour.style.left = '30%';
  branchtour1.style.transform = 'rotate(0deg)';
  branchtour2.style.transform = 'scaleX(-1) rotate(0deg)';
  dot2.style.left = '-5%';
})

