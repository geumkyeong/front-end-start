var wrap = document.querySelector('.wrap');

var str = '';

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        // let block = document.createElement('div');
        // block.className = (i + j) % 2 == 1 ? 'b' : 'w';
        // wrap.appendChild(block);
        str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`;
    }
}

wrap.innerHTML = str;

var blocks = document.querySelectorAll('.wrap > div'); // 모든 block을 가져옴

function select(event) {
    var block = event.currentTarget;
    block.style.backgroundColor = 'yellow';
};

for(var i=0; i < 16; i++) {
    blocks[i].addEventListener('click', select);
}

// blocks.forEach(function(block){ // 각 요소에 이벤트 리스너 추가
//     //block 요소를 클릭하면 함수가 실행되고 event인자가 넘어온다.
//     block.addEventListener('click', function(event){ // event: MouseEvent{ target: div.w, type: "click" }
//         console.log(block); // <div class="w" style="background-color: yellow;"></div>
//         // block.style.backgroundColor = 'yellow';
//         block.className += ' y'; // <div class="w y"></div>
//     })
// });

