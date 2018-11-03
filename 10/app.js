var bug = document.querySelector('#bug');
var box = document.querySelector('.box');

var min = 0;
var max = 395;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min))+ min;
}

function move() {
    var x = getRandomArbitrary(0, 395);
    var y = getRandomArbitrary(0, 395);
    console.log(x+''+y);
    bug.style.left = x + 'px';
    bug.style.top = y + 'px';
}

// function move() {
//     bug.style.transform = translate(x, y);
// }
var timer = 0;
var speed = 1000;

var life = 10;
var score = 0;
var miss = 0;
var level = 1;

// function onClick (event) {
//     console.log('click' + event);
//     life--; score++; miss++;
//     if(life == 0) { event.preventDefault(); };
//     if(score >= 10) { level++; };
//     if(miss == 10) { event.preventDefault(); };
//     str = `Score: ${score} Level: ${level} Miss: ${miss}`;
//     score.innerHTML = str;
// }
function start() {
    clearInterval(timer);
    setInterval(move, speed);
}

function addPoint(){
    score++;
    score.innerHTML = score;
    dieBug(); //클릭했을 때 요소 없어짐
    //이벤트 전파방지 (클릭했을 때 자식요소도 이벤트 전파)
    event.stopPropagation();
}

function life() {
    life--;
    life.innerHTML = life;
    if(life === 0) { gameover(); };
}

function gameover() {
    alert('timeover');
    clearInterval(timer);
}
function dieBug() {
    bug.style.display ='none';
}

bug.addEventListener('click', addPoint);



start();