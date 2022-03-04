const navbar = document.getElementById('navbar');
const dots = document.getElementById('dots');
const more = document.getElementById('more');
const textBtn = document.getElementById('readMoreBtn');
const email = document.getElementById('modal-email');
const contactBtn = document.querySelector('.contact-btn');
const contactDiv = document.querySelector('.contact-div');
const resume = document.querySelector('.resume');

// navbar staying at top of page onscroll
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

//  read more in projects section
const readMoreText = () => {
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    textBtn.innerHTML = 'Read more';
    more.style.display = 'none';
  } else {
    dots.style.display = 'none';
    textBtn.innerHTML = 'Read less';
    more.style.display = 'inline';
  }
};

// showing email address in modal on click
const showContact = () => {
  contactDiv.style.display = 'inline-block';
  contactBtn.style.display = 'none';
};

// download resume
const downloadResume = (e) => {
  e.preventDefault();
  window.open('./assets/resume/KevinMillerResume.pdf');
};

// event listener for email
contactBtn.addEventListener('click', showContact);

// event listener for resume
resume.addEventListener('click', downloadResume);
