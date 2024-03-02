
const heroBlock = document.querySelector('.hero__items');
const firstImg = document.querySelector('.first');
const secondImg = document.querySelector('.second');
const thirdtImg = document.querySelector('.third');
const apps = document.querySelector('.hero__description-apps');

document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
})

document.addEventListener("DOMContentLoaded", function(event) {
  
    function resize() {

        
        if (innerWidth <= 768 ) {
            heroBlock.append(firstImg);
            heroBlock.append(secondImg);
            heroBlock.append(thirdtImg);
            heroBlock.append(apps);
        } else if (innerWidth >= 769 && innerWidth <=991) {
            return location.reload();
        }
        else {
            return;
        }
    }

    window.onresize = resize;
  });


  if (innerWidth <= 768 ) {
    heroBlock.append(firstImg);
    heroBlock.append(secondImg);
    heroBlock.append(thirdtImg);
    heroBlock.append(apps);
}
///Animation
//   gsap.registerPlugin(TextPlugin);

// const heroTitle = new SplitType('#heroTitle')
const heroTitle = SplitType.create('#heroTitle');
const heroTitleMain = SplitType.create('#heroTitleMain');
const heroDescription = SplitType.create('#heroDescription');



  
if(innerWidth >= 1186) {
  gsap.from('#header', {
    y:-100,
    duration:1,
  })

  gsap.to( '#heroTitle .word', {
    x:0,
    opacity:1,
    stagger:0.1,
    delay:1,    
    duration: 1.25,
  });

  let itemsText = gsap.timeline({
    defaults: {
      // duration:1.5,
      easy: 'bounce',
      // delay:1.25,
    }
  });

  itemsText.to('#heroDescription .line', {
    y:0,
    opacity:1, 
    stagger:0.1,
    delay:2.25,
    duration:0.7 
  }).from('#btnHero', {
    x:-100,
    opacity:0,
    duration:0.6,
    stagger:0.3,
  }).from('#circleAnimation',{
      rotate:360,
      stagger:0.2,
      opacity:0,
      scale:0.5,
      duration:1.7,
  }).from('#planetsAnimation', {
      rotate: 720,
      repeat:0,
      duration:1.7,
      scale:0.3,
      x: 1520,
      ease: 'slow',
    },">-1.7").from('#image', {
      x:-700,
      scale:0,
      opacity:0,
      duration:1,
      stagger:0.5,
  });
};
  
    
  
  gsap.from('#imageBasic', {
    rotate:-5,
    scale:0.95,
    repeat:-1,    
    duration:3.5,
    repeatDelay: 0,
    yoyo: true,
    ease:'linear',
  })









