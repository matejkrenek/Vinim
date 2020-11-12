const navigateSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    const body = document.querySelector('body')

    hamburger.addEventListener('click', () => {
        //toggle navbar
        nav.classList.toggle('nav-active');

        body.classList.toggle('hidden-y');
        //burger animation
        hamburger.classList.toggle('toggle');



        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.1}s`
            }
        });
    });
}

navigateSlide()

const turnVideo = () => {
    const turnOn = document.querySelector('.turn-on');
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    const close = document.querySelector('.close');
    const body = document.querySelector('body')

    turnOn.addEventListener('click', () => {
        trailer.classList.toggle('active')
        body.classList.toggle('active')
        video.play()
    })

    close.addEventListener('click', () => {
        trailer.classList.remove('active')
        body.classList.remove('active')
        video.pause()
        video.currentTime = 0;
    })
}

turnVideo()
