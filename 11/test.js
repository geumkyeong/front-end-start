console.log('Hello World!');
// server.js
var http = require('http'); //http 모듈 불러오기

http.createServer(function (req, res) { //웹 server 만들기(설치)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

//앞으로는 로컬서버에서 작업
// fs 파일시스템 접근

// fs 모듈 사용 
// node fs.js
var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});