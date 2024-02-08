const swiper = new Swiper('.HeroSwiper', {
    
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true, 
      },
      480: {
        loop: false,
        slidesPerView:1.07,
        centeredSlides: true,  
        spaceBetween: 10,
        initialSlide: 1,
        // centerInsufficientSlides:true,
        centeredSlidesBounds: true,
      },
      // when window width is >= 640px
      738: {
        slidesPerView: 1,
        spaceBetween: 40
      },
  
    
  }});


  const catalog = new Swiper(".swiperCatalog", {
    slidesPerView: 6,
    loop: false,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next-catalog',
      prevEl: '.swiper-button-prev-catalog',
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.9,
      spaceBetween: 20,
      // centeredSlides: true, 
    },
    360: {
      slidesPerView: 2.2,
      spaceBetween: 20,
      // centeredSlides: true, 
    },
    480: {
      loop: false,
      slidesPerView:3.2,
      // centeredSlides: true,  
      spaceBetween: 20,
      // initialSlide: 1,
      // centerInsufficientSlides:true,
      centeredSlidesBounds: true,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 4,
      slidesPerGroup: 1,

      spaceBetween: 40
    },
    1180: {
      slidesPerGroup:6,
      slidesPerGroup: 1,

    }},
    
  });

  
  
  const discounts = new Swiper(".swiperDiscounts", {
    slidesPerView: 6.3,
    loop: false,
    slidesPerGroup: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next-discounts',
      prevEl: '.swiper-button-prev-discounts',
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.9,
      spaceBetween: 20,
      allowTouchMove: true,
      cssMode: true,

      // centeredSlides: true, 
    },
    360: {
      slidesPerView: 2.1,
      spaceBetween: 20,
      cssMode: true,
      
      allowTouchMove: true,
      // centeredSlides: true, 
    },
    480: {
      slidesPerView:2.5,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    738: {
      slidesPerView: 4.3,
      spaceBetween: 40
    },
    1180: {
      slidesPerView:6.3,
    }},
  });


  const discountItem = new Swiper(".swiperDiscountItem", {
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMovie: true,
    
    pagination: {
      el: ".swiper-pagination-discount",
      clickable: true,
    },
  });


  const review = new Swiper(".swiperReview", {
    slidesPerView: 7.2,
    loop: false,
    slidesPerGroup: 1,
    spaceBetween: 20,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.6,
      spaceBetween: 20,
      // centeredSlides: true, 
    },
    360: {
      slidesPerView: 1.9,
      spaceBetween: 20,
      // centeredSlides: true, 
    },
    480: {
      loop: false,
      slidesPerView:2.6,
      centeredSlides: true,  
      spaceBetween: 20,
      // initialSlide: 1,
      // centerInsufficientSlides:true,
      centeredSlidesBounds: true,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 5,
      slidesPerGroup: 1,

      spaceBetween: 40
    },
    1180: {
      slidesPerGroup:6,
      slidesPerGroup: 1,

    }},
    
  });

  const reviewPeople = new Swiper(".swiperReviewPeople", {
    slidesPerView: 4.5,
    loop: false,
    slidesPerGroup: 1,
    spaceBetween: 20,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      // centeredSlides: true, 
    },
    480: {
      loop: false,
      slidesPerView:1.2,
      spaceBetween: 20,
      // centeredSlides: true, 

      // initialSlide: 1,
      // centerInsufficientSlides:true,
      // centeredSlidesBounds: true,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 2.3,
      slidesPerGroup: 1,

      spaceBetween: 40
    },
    1200: {
      slidesPerGroup:3.5,
      slidesPerGroup: 1,

    },
  },
    
  });
 





// Catalog_page
const hiddenCheckbox= document.querySelectorAll('.hidden__checkbox');
const buttonsShowMore = document.querySelectorAll('.show__more');



buttonsShowMore.forEach(btn => btn.addEventListener('click', event => {
  const targetCurrient = event.target.getAttribute('data-tab');
  

  hiddenCheckbox.forEach(item => {
    if (item.getAttribute('data-value') === targetCurrient) {
      item.classList.remove('hidden__checkbox');
      btn.classList.add('hidden__checkbox');
      return;
    }    

    if(targetCurrient === 'all')
    {
      item.classList.remove('hidden__checkbox');
      buttonsShowMore.forEach(el => el.classList.add('hidden__checkbox'))
      return;
    }
  })

  
  return;


}));


//Catalog page - type list



//Text
const availabilityText = document.querySelectorAll('.availability__text');
const discountDescription = document.querySelectorAll('.discount__description');
//Price
const prices = document.querySelectorAll('.price');
const blocksListPrice = document.querySelectorAll('.block__type__list');
//Svg
const blockBtns = document.querySelectorAll('.buttons__list');
const svgBtns = document.querySelectorAll('.availability__wishlist');
//Btns
const btnBlock = document.getElementById('blocksBtn');
const btnList = document.getElementById('listBtn');
//proloader
const preloader = document.querySelector('.lds-facebook');
const catalog__products = document.querySelector('.catalog__products');
//function transferHere or InsertBefore => parent.insertBefore(el,el.wherebefore)
const transferHere = (block, element ,data1, data2) => {
  block.forEach( item=> {
    const parent = item.getAttribute(data1);
    element.forEach(text => {
      const child = text.getAttribute(data2);      
      if (parent === child) {
                item.append(text)
              }
      }
  
  )
})};

if (btnList){

btnList.addEventListener('click', ()=> {

  if(btnList.children[0].classList.contains('active')){
    return;
  };
    
  preloader.classList.remove('none');
    catalog__products.classList.add('none');
    setTimeout(()=> {
      preloader.classList.add('none');
      catalog__products.classList.remove('none');
    }, 2000);


  document.querySelector('.catalog__products').classList.add('catalog__products__list');
  document.querySelectorAll('.catalog__product').forEach(item => item.classList.add('catalog__product__list'));
  document.querySelectorAll('.discount__description').forEach(item => item.classList.add('discount__description__list'));
  document.querySelectorAll('.swiperDiscountItem').forEach(item => item.classList.add('swiperDiscountItem__list'));
  document.querySelectorAll('.item__descriptions').forEach(item => item.classList.remove('none'));
  btnBlock.children[0].classList.remove('active');
  btnList.children[0].classList.add('active');
  transferHere(discountDescription, availabilityText, 'data-transfer', 'data-aviability');
  transferHere(blocksListPrice, prices, 'data-block-type', 'data-price');
  transferHere(blockBtns, svgBtns, 'data-btns__list', 'data-svg');
});
};

// 
const blockFirstStateAvailability = document.querySelectorAll('.availability');


if (btnBlock) {

btnBlock.addEventListener('click', () => {

  if(btnBlock.children[0].classList.contains('active')){
    return;
  };
    
  preloader.classList.remove('none');
    catalog__products.classList.add('none');
    setTimeout(()=> {
      preloader.classList.add('none');
      catalog__products.classList.remove('none');
    }, 2000);
  

  btnBlock.children[0].classList.add('active');
  btnList.children[0].classList.remove('active');
  document.querySelector('.catalog__products').classList.remove('catalog__products__list');
  document.querySelectorAll('.catalog__product').forEach(item => item.classList.remove('catalog__product__list'));
  document.querySelectorAll('.discount__description').forEach(item => item.classList.remove('discount__description__list'));
  document.querySelectorAll('.swiperDiscountItem').forEach(item => item.classList.remove('swiperDiscountItem__list'));
  document.querySelectorAll('.item__descriptions').forEach(item => item.classList.add('none'));
  transferHere(blockFirstStateAvailability, availabilityText, 'data-aviability-block', 'data-aviability');
  transferHere(blockFirstStateAvailability, svgBtns, 'data-aviability-block', 'data-svg');
  transferHere(discountDescription, prices, 'data-transfer', 'data-price');



});
};

//mobile resize onload


if (catalog__products) {
  if(window.innerWidth <= 480){
    document.querySelectorAll('.catalog__product').forEach(item => item.classList.add('catalog__product__mobile'));
    document.querySelectorAll('.item__descriptions').forEach(item => item.classList.remove('none'));
    document.querySelectorAll('.discount__description').forEach(item => item.classList.add('discount__description__mobile'));
    transferHere(discountDescription, blockFirstStateAvailability, 'data-transfer', 'data-aviability-block');
    transferHere(discountDescription, blocksListPrice, 'data-transfer', 'data-block-type');
    transferHere(blockBtns, svgBtns, 'data-btns__list', 'data-svg');
    transferHere(prices, availabilityText , 'data-price', 'data-aviability' );
    prices.forEach(item => {
      const count = item.children.length-1;
      item.insertBefore(item.children[count], item.children[0]);   
    });

    blockFirstStateAvailability.forEach(item => 
      item.remove())

  }
}

//color product page
const colors = {
  white: 'Цвет: Белый',
  black: 'Цвет: Черный',
  red: 'Цвет: Красный',
};



  const modelColor = document.getElementById('model-color');
  const colorBtns = document.querySelectorAll('.button-color');

  if (colorBtns) {
  colorBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      
      colorBtns.forEach(items => {
        items.classList.remove('active');
      });
      
      e.target.classList.add('active');
      
    if (e.target.classList.contains('button-white')) {
      modelColor.innerText = colors.white;
      
    }

    if (e.target.classList.contains('button-black')) {
      modelColor.innerText = colors.black;
    }
    
    if (e.target.classList.contains('button-red')) {
      modelColor.innerText = colors.red;
    }
  })
});
}


// translate btns & price product.html
const productPage = document.querySelector('.product');

if (productPage) {
  if ( window.innerWidth <= 480) {
  
  const reviewsBlock = document.querySelector('.reviews');
  const productBuy = document.querySelector('.product__buy');
  reviewsBlock.appendChild(productBuy)    
  
}
}


