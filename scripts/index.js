const navSlide = () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    mobile.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
    });
}

navSlide();