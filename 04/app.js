var wrap = document.querySelector('.wrap');

var str = '';

//var 변수 재선언, 재할당 O, let 변수 재선언 X 재할당 O, const 변수 재선언, 재할당 X

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        let block = document.createElement('div');
        block.className = (i + j) % 2 == 1 ? 'b' : 'w';
        wrap.appendChild(block);
    }
}

// wrap.innerHTML = str;