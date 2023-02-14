let slides = document.querySelectorAll("div.slider__item");
let sliderDots = document.querySelectorAll("div.slider__dot");
let rightSwitch = document.querySelector("div.slider__arrow_next");
let leftSwitch = document.querySelector("div.slider__arrow_prev");
const totalSlides = slides.length - 1;

rightSwitch.addEventListener('click', () => switchSlide(1));
leftSwitch.addEventListener('click', ()=> switchSlide(-1));

for (let i = 0; i<sliderDots.length;i++){
    sliderDots[i].addEventListener('click', ()=> {
        const activeDot = document.querySelector("div.slider__dot_active");
        let activeDotId = 0;
        for (const dot of sliderDots.entries()) {
            if (dot[1] === activeDot){
                activeDotId = dot[0];
            }
        }
        goToSlide(activeDotId,i);
    });
}

function switchSlide(step){
    let activeSlideId = 0;
    const activeSlide = document.querySelector("div.slider__item_active");
    for (const slide of slides.entries()) {
        if (slide[1] === activeSlide){
            activeSlideId = slide[0];
        }
    }
    goToSlide(activeSlideId,activeSlideId + step);
}

function goToSlide(slideFrom,slideTo){
    if (slideTo < 0){
        slideTo = totalSlides;
    }else if (slideTo > totalSlides){
        slideTo = 0;
    }
    slides[slideFrom].classList.remove("slider__item_active");
    sliderDots[slideFrom].classList.remove("slider__dot_active");
    slides[slideTo].classList.add("slider__item_active");
    sliderDots[slideTo].classList.add("slider__dot_active");
}