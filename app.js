'use strict';
const slides = document.querySelectorAll('.slide');
for(const slide of slides) {
    slide.addEventListener('click', () => {
        removeActive()
        slide.classList.add('active')
    })
}

function removeActive() {
    slides.forEach(slide => slide.classList.remove('active'))
}
