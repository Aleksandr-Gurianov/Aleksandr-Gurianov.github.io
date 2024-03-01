
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



