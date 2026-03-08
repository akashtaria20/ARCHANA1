let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bg-music');

function nextSlide() {
    // Start music on first interaction
    if (currentSlide === 0) {
        music.play().catch(e => console.log("Music play blocked until user clicks"));
    }

    slides[currentSlide].classList.remove('active');
    currentSlide++;

    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add('active');
    }
}

function resetSlides() {
    slides[currentSlide - 1].classList.remove('active');
    currentSlide = 0;
    slides[0].classList.add('active');
}
