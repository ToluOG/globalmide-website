const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  hamburger.classList.toggle('hamburger-active');
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('nav-open');
    hamburger.classList.remove('hamburger-active');
  }
});