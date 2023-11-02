

/*const loco_ScrollTriggerFix = () =>{

    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

loco_ScrollTriggerFix(); */


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grabCursor: true,
  spaceBetween: 70,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function flipFunctionality(){

  let fBtn = document.querySelector('.flipBtn');
  fBtn.addEventListener('click',() =>{

    document.querySelector('.intro-sub-main').classList.toggle('rm');
    document.querySelector('.intro-main').classList.toggle('xxm');
  })

}

flipFunctionality();


function entireGsapCode(){

  gsap.from('#i-txt',{

    duration: 1,
    opacity: 0,
    x: -40,

  })

  gsap.from('#i2-txt',{

    duration: 2,
    opacity: 0,
    x: -60,

  })

  gsap.from('#i3-txt',{

    duration: 3,
    opacity: 0,
    x: -80,

  })

  gsap.from('.intro-main',{

    
    opacity: 0,
    scrollTrigger: {

      trigger: '.intro-main',
      scroller: 'body',
      start: 'top 50%',
  
      
    }
  })
  gsap.from('.c-h1',{

    
    opacity: 0,
    y: 40,

    scrollTrigger: {

      trigger: '.c-h1',
      scroller: 'body',
 
      start: 'top 50%',
  
      
    }
  })

  gsap.from('.main-cs',{

    
    opacity: 0,
    y: 40,

    scrollTrigger: {

      trigger: '.main-cs',
      scroller: 'body',
      start: 'top 50%',
  
      
    }
  })
  

  gsap.from('.intro-sec h1',{

    opacity: 0,
    y: -40,
    scrollTrigger: {

      trigger: '.intro-sec h1',
      scroller: 'body',
     
      start: 'top 50%'

    }
  })
}

entireGsapCode();