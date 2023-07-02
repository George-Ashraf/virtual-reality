// scroll
window.addEventListener('scroll',function(){
    let nav=document.querySelector('nav')
    nav.classList.toggle('sticky',window.scrollY>0)
  })
  // humburger
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });
  // wow
  wow = new WOW({
    boxClass: 'animate__animated'
  
  }).init();
  // wow js
  