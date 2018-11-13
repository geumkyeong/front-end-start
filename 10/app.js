var repeat = setInterval(move, speed);

var $bug = document.querySelector('#bug');
var $box = document.querySelector('.box');
var $score = document.querySelector('#score');
var $life= document.querySelector('#life');

var stopInterval = false;

var score = 0;
var life = 10;
var level = 1;
var speed = 1500;
var timer = 0;

function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) ) + min;
}

function move() {
    if(!stopInterval){
        $bug.style.display = 'block';

        var x = getRandomArbitrary(30, 300);
        var y = getRandomArbitrary(30, 300);

        console.log(x, y);
        console.log(speed);

        $bug.style.left = x + 'px';
        $bug.style.top = y + 'px';
    }
}

function addScore(){
    score++;
    $score.innerHTML = score;
    dieBug(); //클릭했을 때 요소 없어짐
    //이벤트 전파방지 (클릭했을 때 자식요소도 이벤트 전파)
    event.stopPropagation();
}
  
function discountLife() {
    life--;
    $life.innerHTML = life;
    if(life === 0) { gameover(); }
}

function setSpeed(){
    if(score != 0 && score % 5 === 0) {
        level++;
        speed -= 500;
    }
}

function start() {
    setSpeed();
    clearInterval(repeat);
    repeat = setInterval(move, speed);
}

function gameover() {
    clearInterval(repeat);
    alert('GameOver');
    stopInterval = true;
}

function dieBug() {
    $bug.style.display ='none';
    clearInterval(repeat);
    start();
}

start();

$bug.addEventListener('click', addScore);
$box.addEventListener('click', discountLife);