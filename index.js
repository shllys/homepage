const back = document.querySelector('.bx-x');
const menu = document.querySelector('.menu');


back.addEventListener('click', () => {
    menu.classList.toggle('block');

});

const clickMenu = document.querySelector('.bx-menu');

clickMenu.addEventListener('click', ()=>{
    menu.classList.toggle("block");
})