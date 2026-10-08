/*===== toggle icon navbar=====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===== scroll section active link=====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*===== sticky navbar =====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===== remove toggle icon and navbar when click navbar link (scroll) =====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===== scroll reveal =====*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .gallery-item, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===== typed js =====*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Back-End Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Update footer year dynamically
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

/*===== send contact form to WhatsApp =====*/
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
        `Nama: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Nomor telepon: ${formData.get('phone') || '-'}`,
        `Subjek: ${formData.get('subject')}`,
        '',
        `Pesan: ${formData.get('message')}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/6282398060605?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});