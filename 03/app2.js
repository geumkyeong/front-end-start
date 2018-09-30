// var dom = document.getElementById('debug');
// console.log(dom);

// <div id="debug">debug</div>

// var dom2 = document.querySelectorAll('div');
// var dom2 = document.querySelectorAll('#debug');

// console.log(dom2);

//1. div 태그 생성
var div = document.createElement('div');
//2. style 적용
div.style.border = "1px solid red";
//3. 내용 넣기
div.innerHTML = "<h3>ddddd</h3>";
//4. Append the div to body.
document.body.appendChild(div);

//<div style="border: 1px solid red;"><h3>ddddd</h3></div>