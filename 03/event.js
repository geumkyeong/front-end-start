//var btn = document.getElementById('btn');
// ==
var btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener("click", click);

function click(event) {
    console.log('click', event);
    
}

// function click(event) {
//     return function () {
//         console.log('click', event);
//         open();
//     };
// }

// //엘리멘트에 이벤트 리스너 등록
// btn.addEventListener('click', click())

// function open() {
//     window.open("http://daum.net", "MsgWindow", "width=200,height=100");
// }
