const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length-1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

const navBarMain = document.querySelector(".nav-bar-main");
window.addEventListener('scroll', function(){
  if (window.scrollY > navBarMain.getBoundingClientRect().height){
    navBarMain.classList.add('fixed')
  }else{
    navBarMain.classList.remove('fixed')

  }

})
// fade on scroll
const faders = document.querySelectorAll('.fade-in-from-bottom');
fromBottomOptions ={
  root: null,
  threshold: 0.25,
}
const fadeInFromBottom = new IntersectionObserver(function(entries, fadeInFromBottom){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('appear')
      } else{
        return;
      }
    });
}, fromBottomOptions)
faders.forEach(fader=>{
  fadeInFromBottom.observe(fader);
})
  
