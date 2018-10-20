var channel = 'trending';
var page = 1;
var pageCount = 20;
var url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;


function setUrl(aTag) {
    channel = document.getElementById(aTag).id;
    url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;
}

//List
var list = document.getElementById('list');

function board(json) {
    var str = '';
    
    for(var i = 0; i < json.data.length; i++){
        var title = json.data[i].title;
        var path = json.data[i].path;

        str += `<a href="https://1boon.kakao.com/${path}">${title}</a><BR>`;
    }

    list.innerHTML = str;
}

getUrlData(url, board);

function getUrlData(url, callback) {
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            //console.log('json: ', data);
            callback(data)
        });
    })
    .catch(function(err){
        console.log('Fetch Error :-S', err);
    });
}

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

    setUrl(event.target.id);
    getUrlData(url, board);
}