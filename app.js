const navbar = document.getElementById('navbar');
const email = document.getElementById('modal-email');
const emailBtn = document.querySelector('.email-btn');
const emailDiv = document.querySelector('.email-div');
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

// showing email address in modal on click
const showEmail = (e) => {
  e.preventDefault();
  emailDiv.style.display = 'block';
};

// download resume
const downloadResume = (e) => {
  e.preventDefault();
  window.open('./assets/resume/KevinMillerResume.pdf');
};

// event listener for email
emailBtn.addEventListener('click', showEmail);

// event listener for resume
resume.addEventListener('click', downloadResume);
