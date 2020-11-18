const carouselSlide = document.querySelector('.slide-images');
const slideImages = document.querySelectorAll('.slide-images img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = slideImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= slideImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';
    

});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';

});

carouselSlide.addEventListener('transitionend', () =>{
    if(slideImages[counter].id ==='lastClone'){
        carouselSlide.style.transition = "none";
        counter = slideImages.length-2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';
    }
    if(slideImages[counter].id ==='firstClone'){
        carouselSlide.style.transition = "none";
        counter = slideImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px )';
    }
})