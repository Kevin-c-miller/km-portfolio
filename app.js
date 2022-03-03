const navbar = document.getElementById('navbar');
const email = document.getElementById('modal-email');
const emailBtn = document.querySelector('.email-btn');
const emailDiv = document.querySelector('.email-div');

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

const showEmail = (e) => {
  e.preventDefault();
  emailDiv.style.display = 'block';
  emailDiv.style.textAlign = 'center';
};

emailBtn.addEventListener('click', showEmail);
