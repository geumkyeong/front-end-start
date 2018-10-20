// Nav-bar action
var clicked = document.querySelector('.active');//이미 클릭된 요소
var lies = document.querySelectorAll('.nav > li');

lies.forEach(function(li){ // 각 요소에 이벤트 리스너 추가
    //li 요소를 클릭하면 함수가 실행되고 event인자가 넘어온다.
    li.addEventListener('click', onClick)
});

function onClick() {
    clicked = document.querySelector('.active');
    clicked.className = clicked.className.replace(/\bactive\b/g, '');
    
    var click = event.currentTarget; //이벤트가 바인딩된 요소
    click.className = 'active';
}