const navMenu = document.querySelector('nav ul');

const navLinks = navMenu.querySelectorAll('a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const href = link.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
