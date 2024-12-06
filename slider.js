let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function showSlide(index) {
    document.querySelector('.slides').style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 3;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

showSlide(currentIndex);