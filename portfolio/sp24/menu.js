document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
})

const menuLists = document.querySelectorAll('.item.has__children');
if(window.innerWidth < 1280){
  menuLists.forEach(item => {

    const basicLink = item.children[0];
    basicLink.addEventListener('click',function(e){
      item.classList.toggle('active');
      
    
    })
  })
}


var datepicker = new Datepicker('#datepicker');

//input form
const dropdownLists = document.querySelectorAll('.form__input-dropdown');

dropdownLists.forEach(dropdownList => {
  const ul = dropdownList.querySelector('ul');
  dropdownList.onclick = function() {   
      ul.classList.toggle('none');   
  }
});

dropdownLists.forEach(dropdownList => {
  const input = dropdownList.querySelector('input');
  const ul = dropdownList.querySelector('ul');
  const lists = dropdownList.querySelectorAll('li'); 

  lists.forEach(item => {
    item.onclick = function () {
      console.log(item.innerText)
      input.value = item.innerText;      
    }
  })
});

//swiperHome-normal
const catalogSlider = new Swiper('.catalogSlider', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop:true,
  autoplay: {
    delay: 0, 
    disableOnInteraction: true, 
    },
  speed: 6000,
  on: {
    init() {
      
      this.el.addEventListener('mouseenter', () => {        
        this.autoplay.stop();
        this.params.speed=300;
      });
      this.el.addEventListener('mouseleave', () => {       
        this.params.speed=6000; 
        this.autoplay.start();
      });

      this.el.addEventListener('touchmove', () => {        
        this.autoplay.stop();
        this.params.speed=300;
      });

      this.el.addEventListener('touchend', () => {       
        this.params.speed=6000; 
        this.autoplay.start();
      });
      this.el.addEventListener('touchcancel', () => {       
        this.params.speed=6000; 
        this.autoplay.start();
      });

    },

    // touchEnd(){
    //   console.log(this)
    // }
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  },
  
  
});
const catalogSliderReverse = new Swiper('.catalogSliderReverse', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop:true,
  autoplay: {
    delay: 0, 
    disableOnInteraction: true, 
    reverseDirection: true,
    },
  speed: 6000,
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {        
        this.autoplay.stop();
        this.params.speed=300;
      });
      this.el.addEventListener('mouseleave', () => {       
        this.params.speed=6000; 
        this.autoplay.start();
      });

      this.el.addEventListener('touchstart', () => {        
        this.autoplay.stop();
      });
      this.el.addEventListener('touchMove', () => {        
        this.autoplay.stop();
      });

      this.el.addEventListener('touchEnd', () => {       
        
        this.autoplay.start();
      });
      this.el.addEventListener('touchCancel', () => {       
        
        this.autoplay.start();
      });
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  },
});

//swiper reviews
const reviewsPagStart = document.querySelector('.pagination-reviews .span-start');
const reviewsPagMid = document.querySelector('.pagination-reviews .span-middle');
const reviewsPagEnd = document.querySelector('.pagination-reviews .span-end');

  const reviewsSwiper = new Swiper('.reviewsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next.swiper-reviews-button-next",
      prevEl: ".swiper-button-prev.swiper-reviews-button-prev",
    },
    on:{
      //Если слайд последний     
      reachEnd: () => {
        reviewsPagEnd.classList.add('span-active');
        reviewsPagMid.classList.remove('span-active');
      },
     //Если слайд первый
      reachBeginning: () => {
        reviewsPagStart.classList.add('span-active');
        reviewsPagMid.classList.remove('span-active');
      },
      // Если не начальная и не конечная позиция
      fromEdge: () => {
        reviewsPagStart.classList.remove('span-active');
        reviewsPagEnd.classList.remove('span-active');
        reviewsPagMid.classList.add('span-active');
      }
    },
  });
  Fancybox.bind('[data-fancybox="rewiews"]', {
   
  });

  const parkSwiper = new Swiper('.parkSlider', {
    slidesPerView: 4,
    spaceBetween: 20,
    centriedSlides: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next.swiper-park-button-next",
      prevEl: ".swiper-button-prev.swiper-park-button-prev",
    },
    autoplay: {
      delay: 1500, 
      disableOnInteraction: true, 
      },
    speed: 1500,
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {        
          this.autoplay.stop();
          this.params.speed=300;
        });
        this.el.addEventListener('mouseleave', () => {       
          this.params.speed=1500; 
          this.autoplay.start();
        });
        
        this.navigation.nextEl[0].addEventListener('mouseenter', ()=>{
          this.autoplay.stop();
          // this.params.delay=300;
          this.params.speed=300;
        });
        this.navigation.nextEl[0].addEventListener('click', ()=>{ 
          this.params.speed=300;         
          this.slideNext();
        });
        this.navigation.nextEl[0].addEventListener('mouseleave', ()=>{
          
          this.params.speed=1500; 
          this.autoplay.start();
        });

        this.navigation.prevEl[0].addEventListener('mouseenter', ()=>{
          this.autoplay.stop();
          this.params.speed=300;
        });
        this.navigation.prevEl[0].addEventListener('click', ()=>{
          this.params.speed=300;
          this.slidePrev();
        });
        this.navigation.prevEl[0].addEventListener('mouseleave', ()=>{
          this.params.speed=1500; 
          this.autoplay.start();
        });
        
      }
    }
  });

  const partnersSlider =  new Swiper('.partnersSlider', {
    slidesPerView: 4,
    spaceBetween: 20,
    centriedSlides: true,
    allowTouchMove: false,
    loop: true,    
    autoplay: {
      delay: 0, 
      disableOnInteraction: true, 
      },
    speed: 4000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },

  });
  //fancy review
 
  //swiper letters
const lettersPagStart = document.querySelector('.pagination-letters .span-start');
const lettersPagMid = document.querySelector('.pagination-letters .span-middle');
const lettersPagEnd = document.querySelector('.pagination-letters .span-end');

  const lettersSwiper = new Swiper('.lettersSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next.swiper-letters-button-next",
      prevEl: ".swiper-button-prev.swiper-letters-button-prev",
    },
    on:{
      //Если слайд последний     
      reachEnd: () => {
        lettersPagEnd.classList.add('span-active');
        lettersPagMid.classList.remove('span-active');
      },
     //Если слайд первый
      reachBeginning: () => {
        lettersPagStart.classList.add('span-active');
        lettersPagMid.classList.remove('span-active');
      },
      // Если не начальная и не конечная позиция
      fromEdge: () => {
        lettersPagStart.classList.remove('span-active');
        lettersPagEnd.classList.remove('span-active');
        lettersPagMid.classList.add('span-active');
      }
    },
  });
  Fancybox.bind('[data-fancybox="letters"]', {
   
  });

//modal
Fancybox.bind('[data-fancybox]', {
  arrows: false
});  

Fancybox.bind('[data-fancybox]', {
  arrows: false
});  
  