        const slider = document.querySelector('.slider-container');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let currentIndex = 0;

        // Clone the first slide and append it to the end
        const firstSlideClone = slides[0].cloneNode(true);
        slider.appendChild(firstSlideClone);

        function nextSlide() {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            slider.style.transition = 'transform 1s ease';

            if (currentIndex === totalSlides) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    currentIndex = 0;
                    slider.style.transform = 'translateX(0)';
                }, 1000);
            }
        }

        setInterval(nextSlide, 3000);

        document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});