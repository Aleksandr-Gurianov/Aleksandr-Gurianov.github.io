
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
if(heroTitle){
  gsap.to('.word', {
    x:0,
    opacity:1,
    stagger:0.1,
    delay:0.2,    
    duration: 1.25,
  });
}

const heroDescription = SplitType.create('#heroDescription');
if(heroDescription){
  gsap.to('.line', {
    y:0,
    opacity:1, 
    stagger:0.3,
    delay:0.5,
    duration:1, 
  })
}


  






