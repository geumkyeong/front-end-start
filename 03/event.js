// var btn = document.getElementById('btn');
// var btn = document.querySelector('#btn');

// console.log(btn);
// <button type="button" id="btn">다음</button>

// 버튼 클릭했을 때 다음 띄우기
// function click(event) {
//     console.log('click', event);
//     window.open('http://m.daum.net', '', 'width = 500, height = 500');
// }
// btn.addEventListener('click', click);

var clickCount = 0;

function popup(event) {
    console.log(++clickCount);
    console.log(arguments, this, event, event.type, event.currentTarget);
}

document.body.addEventListener('click', popup);

// 1
// Arguments [MouseEvent, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// <body>...</body>
// MouseEvent {isTrusted: true, screenX: 155, screenY: 130, clientX: 154, clientY: 50, …}
// "click" <body>​…​</body>​


document.body.addEventListener('click', function(){
    console.log("click");
});

// click