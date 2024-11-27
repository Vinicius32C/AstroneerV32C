//----------------------------------------------CAROUSEL------------------------------------------------

let currentSlide = 0;
const slides = document.querySelectorAll('.carouselslide');
const totalSlides = slides.length;

const left = document.getElementById("cbLeft");
const right = document.getElementById("cbRight");

let canClick = true;

function nextSlide(){
  currentSlide = (currentSlide + 1) % totalSlides;
  const carouselWrapper = document.getElementById("carouselWrapper");
  carouselWrapper.style.transform = `translateX(-${currentSlide * 120}%)`;
}

function prevSlide(){
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  carouselWrapper.style.transform = `translateX(-${currentSlide * 120}%)`;
}

left.addEventListener('click', function(){
    if (canClick){
      disableButtons()
      prevSlide();
      resetInterval();
    }
  })
  
  right.addEventListener('click', function(){
    if (canClick){
      disableButtons()
      nextSlide();
      resetInterval();
    }
  })
  
  function resetInterval(){
        clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 8000);
  }
  
  function disableButtons(){
    canClick = false;
    setTimeout(() => {
      canClick = true;
    }, 500);
  }
  
  slideInterval = setInterval(nextSlide, 15000);