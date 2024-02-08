const tooltipRegion = document.querySelector('.tooltip-region-title');
const regions = document.querySelectorAll('.region');
// const activeRegion = document.querySelector('.active-region');
const tooltipCursor = document.querySelector('.tooltip-cursor');
const mapContainer = document.querySelector('.map-wrapper');


console.log(tooltipCursor)
regions.forEach(region =>  {
    region.addEventListener('mousemove', function(event){
        tooltipRegion.innerText = this.dataset.title;

        tooltipCursor.innerHTML = this.dataset.title;
    });
    
    region.addEventListener('mouseenter', function () {
        tooltipRegion.style.display = 'block';
        tooltipCursor.style.display = 'block';

    });

    region.addEventListener('mouseleave', function () {
        tooltipRegion.style.display = 'block';
        tooltipCursor.style.display = 'none';
    });

    region.addEventListener('click', () => {
        const activeRegion = document.querySelector('.active-region');


        if (activeRegion.classList.contains('active-region')) {
            activeRegion.classList.remove('active-region');
        }
        
        region.classList.add('active-region');
        
     });

    });


//Menu Mobile
    document.querySelector('.burger').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('nav').classList.toggle('open');
    })


// Animate 
let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
            let animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }

            else {
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');

                }

            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}


// show__more
let showMore = document.querySelector('.show__more');
let varietyBtn = Array.from(document.querySelectorAll('.variety__btn'));

window.addEventListener('resize', e => {
    if(e.target.window.innerWidth > 700)  responceLarge();
    if(e.target.window.innerWidth <= 700)  responceMedium();
    if(e.target.window.innerWidth <= 570)  responceSmall();

})

function openTypes(){
    showMore.addEventListener('click', ()=> {
        varietyBtn.forEach(item => item.classList.remove('hidden'));
        showMore.classList.add('hidden');
    })
}

function responceLarge() {
    if (window.innerWidth >700) {
        showMore.classList.add('hidden');

        varietyBtn.forEach((item, index)=> {
            item.classList.add('hidden')
            if (index <= 10) {
                item.classList.remove('hidden')
            } else if (index > 10){
                showMore.classList.remove('hidden');
            }
            openTypes()
        })
    }
}

responceLarge();

function responceMedium() {
    if (window.innerWidth <= 700 && window.innerWidth > 570 ) {
        showMore.classList.add('hidden');

        varietyBtn.forEach((item, index)=> {
            item.classList.add('hidden')
            if (index <= 7) {
                item.classList.remove('hidden')
            } else if (index > 7){
                showMore.classList.remove('hidden');
            }
            openTypes()
        })
    }
}

responceMedium();

function responceSmall() {
    if (window.innerWidth <= 570 && window.innerWidth > 320 ) {
        showMore.classList.add('hidden');

        varietyBtn.forEach((item, index)=> {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5){
                showMore.classList.remove('hidden');
            }
            openTypes()
        })
    }
}

responceSmall();