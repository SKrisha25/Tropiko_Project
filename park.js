// header1
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let cardBx = document.querySelectorAll('.card');

let b = 0;
rightBtn.addEventListener('click' , ()=> {
    b++;
    if (b > cardBx.length - 1) {
        b = 0;
        cardBx[0].classList.remove('dis');
        cardBx[cardBx.length - 1].classList.add('dis');
    }
    cardBx[b].classList.remove('dis');
    cardBx[b - 1].classList.add('dis');
});

leftBtn.addEventListener('click' , ()=> {
    b--;
    if( b < 0) {
        b = cardBx.length - 1;
        cardBx[0].classList.add('dis');
    }
    cardBx[b].classList.remove('dis');
    cardBx[b + 1].classList.add('dis');
});



// header5
let forwordBtn = document.querySelector('.forword-btn');
let backwordBtn = document.querySelector('.backword-btn');
let jeonBx = document.querySelectorAll('.jeon');

let a = 0;

backwordBtn.addEventListener('click', ()=> {
    a++;
    if (a > jeonBx.length - 1) {
        a = 0;
        jeonBx[0].classList.remove('hide');
        jeonBx[jeonBx.length - 1].classList.add('hide');
    }
    jeonBx[a].classList.remove('hide');
    jeonBx[a - 1].classList.add('hide');
});


forwordBtn.addEventListener('click', ()=> {
    a--;
    if (a < 0) {
      a = jeonBx.length -1;
      jeonBx[0].classList.add('hide');
    }
    jeonBx[a].classList.remove('hide');
    jeonBx[a + 1].classList.add('hide');
});