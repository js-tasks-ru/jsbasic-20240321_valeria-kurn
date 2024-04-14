function initCarousel() {
    const carousel = document.querySelector('.carousel__inner');
    const leftArrow = document.querySelector('.carousel__arrow_left');
    const rightArrow = document.querySelector('.carousel__arrow_right');

    leftArrow.style.display = 'none';
    rightArrow.style.display = '';

    let slideNumber = 0;
    const slideWidth = carousel.offsetWidth;

    function moveSlide(slideNumber) {
      carousel.style.transform = 'translateX(-' + slideWidth * slideNumber + 'px)';
    }

    leftArrow.addEventListener("click", () => {
      slideNumber--;
      moveSlide(slideNumber);
      if (slideNumber == 0) leftArrow.style.display = 'none'
      if (rightArrow.style.display == 'none') rightArrow.style.display = ''
    })

    rightArrow.addEventListener("click", () => {
      slideNumber++;
      moveSlide(slideNumber);
      if (slideNumber == 3) rightArrow.style.display = 'none'
      if (leftArrow.style.display == 'none') leftArrow.style.display = ''
    })
}