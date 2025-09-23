const button = document.getElementById('theme-button');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
lightTheme(savedTheme === 'light');

function lightTheme(type) {
  if (type == true) {
    body.classList.add('light');
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    body.classList.remove('light');
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

button.addEventListener('click', () => {
  const ilight = body.classList.toggle('light');
  lightTheme(ilight);
  localStorage.setItem('theme', ilight ? 'light' : 'dark');
});

const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});