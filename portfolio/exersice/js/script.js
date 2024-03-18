let selectHeader = document.querySelector('.select__header');
let selectBody = document.querySelector('.select__body');
let selectItems = document.querySelectorAll('.select__item');
let icon = document.querySelector('.select__icon');
let current = document.querySelector('.select__current');


selectHeader.addEventListener('click', function() {
    selectBody.classList.toggle('active');
    icon.classList.toggle('active');
    selectHeader.classList.toggle('active');
    current.classList.toggle('active');


});


selectItems.forEach(item => {
    item.addEventListener('click', function(){
        let text = this.innerText;
        let current= this.closest('.select').querySelector('.select__current');
        current.innerText=text;
        selectBody.classList.toggle('active');
        icon.classList.toggle('active');
        selectHeader.classList.toggle('active');
        current.classList.toggle('active');

    });
});




document.addEventListener( 'click', (e) => {
	const clickHeader = e.composedPath().includes(selectHeader);
	const clcikBody = e.composedPath().includes(selectBody);
	if ( selectHeader.classList.contains('active') &&  ! clcikBody && ! clickHeader ) {        
        selectHeader.classList.remove('active');
        selectBody.classList.remove('active');
        icon.classList.remove('active');
        current.classList.remove('active');
	}
})

let range = document.querySelector('[type="range"]');
let rangePercent = document.getElementById('range__percent');

range.oninput = function(){
    rangePercent.innerHTML = range.value + '%';
}


document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('open');
})


    


