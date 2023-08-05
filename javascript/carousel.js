const slidesContainer = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;

function showPreviousSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    updateSlidePosition();
}

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function scrollToWondersList() {
    const wondersListSection = document.querySelector('.wonders-list');
    if (wondersListSection) {
        const yOffset = -50; // Смещение, чтобы оставить небольшой зазор
        const y = wondersListSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function redirectToGallery() {
    window.location.href = `gallery.html`;
}