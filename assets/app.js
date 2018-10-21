var channel = 'trending';
var page = 1;
var pageCount = 20;
var url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;

var str = '';
var btn = document.querySelector('.btn');

function btnClick() {
    page++;
    setUrl();
    getUrlData(url, board);
}

function setUrl() {
    url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;
}

btn.addEventListener('click', btnClick);

//List
var list = document.getElementById('list');

function board(json) {
    for(var i = 0; i < json.data.length; i++){
        var coverImage = json.data[i].coverImage;
        var title = json.data[i].title;
        var path = json.data[i].path;
        var totalView = json.data[i].totalView;

        str += `<a href="https://1boon.kakao.com/${path}" class="conList">
            <span class="containImg">
                <img src="${coverImage}" class="conImg" alt="">
            </span>
            <strong class="conTitle">${title}</strong>
            <span class="conTotal">${totalView} 읽음</span>
        </a><BR>`;
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

// Nav-bar
var clicked = document.querySelector('.active'); //클릭된 요소
var lies = document.querySelectorAll('.nav > li');

lies.forEach(function(li){ // 각 요소에 이벤트 리스너 추가
    //li 요소를 클릭하면 함수가 실행되고 event인자가 넘어온다.
    li.addEventListener('click', onClick)
});

function onClick() {
    str = ''; page = 1; //list 초기화
    channel = document.getElementById(event.target.id).id; //a-tag의 id가져오기

    clicked = document.querySelector('.active');
    clicked.className = clicked.className.replace(/\bactive\b/g, '');
    
    var click = event.currentTarget; //이벤트가 바인딩된 요소
    click.className = 'active';

    setUrl();
    getUrlData(url, board);
}

//Scroll-bar

// var $window = $(window);
// var $glyphicon = $('.glyphicon')

// function checkScroll(event) {
//   var scrollTop = $window.scrollTop();
//   var 업버튼이_보여질_포지션 = 100;

//   if(scrollTop > 업버튼이_보여질_포지션) {
//     $glyphicon.fadeIn();
//   }
// }
// function goTop(){
//   // $window.scrollTop(0); 
//   $( 'html, body' ).animate( { scrollTop : 0 }, 400 )
// }

// $window.on('scroll', checkScroll);
// $glyphicon.click(goTop);