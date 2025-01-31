let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll behavior for updating active links
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
               
                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });
};

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the "X" icon
    navbar.classList.toggle('active'); // Toggles the navbar menu visibility
};
