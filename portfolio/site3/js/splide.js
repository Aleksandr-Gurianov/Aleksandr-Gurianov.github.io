var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 5,
    perMove: 1,
    focus  : 0,
    autoplay: false,
    pagination: true,
    rewind : true,
    arrows: true,
    width: '1325px',
    gap: 15,
    breakpoints: {
    1450: {
    perPage: 3,
    width: '795px',
    },

    900: {
    perPage: 2,
    width: '530px',
    },
    650: {
    perPage: 1,
    width: '265px',
    },
},
} );

splide.mount();