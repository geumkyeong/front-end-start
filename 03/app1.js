function test(){
    console.log("test()");
}
//1초 후 "test()" 출력
//var id = setTimeout(test, 1000);
//1초 마다 "test()" 출력
var id = setInterval(test, 1000);

// app2.js 불러오기

//1. head 태그 선택
var head = document.querySelector('head');
//2. script 태그 생성
var script = document.createElement('script');
//3. app2.js 연결(링크)
script.src = 'app2.js';
//4. head 태그에 script 추가
head.appendChild(script);