var btn1 = document.querySelector('#pre-btn');
var btn2 = document.querySelector('#nex-btn');

t.addEventListener('click', click());

function click() {
    return function (event) {
        alert('Hello world, ' + event.btn.value);
    };
}
