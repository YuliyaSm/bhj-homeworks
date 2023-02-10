let slides = document.querySelectorAll("div.slider__item");
let sliderDots = document.querySelectorAll("div.slider__dot");
let currentSlide = 0;
let rightSwitch = document.querySelector("div.slider__arrow_next");
let leftSwitch = document.querySelector("div.slider__arrow_prev");
const totalSlides = slides.length - 1;

rightSwitch.addEventListener('click', () => switchSlide("right"));
leftSwitch.addEventListener('click', ()=> switchSlide("left"));
for (let i = 0; i<sliderDots.length;i++){
    sliderDots[i].addEventListener('click', ()=> goToSlide(i));
}


function switchSlide(direction){
    let step = 1;
    if (direction === "left"){
        step = -1;
    }
    let nextSlide = currentSlide + step;
    goToSlide(nextSlide);

}

function goToSlide(num){
    let targetSlide = num;
    if (targetSlide < 0){
        targetSlide = totalSlides;
    }else if (targetSlide > totalSlides){
        targetSlide = 0;
    }
    slides[currentSlide].classList.remove("slider__item_active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    slides[targetSlide].classList.add("slider__item_active");
    sliderDots[targetSlide].classList.add("slider__dot_active");
    currentSlide = targetSlide;
}