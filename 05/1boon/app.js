console.log('1boon');

var wrap = document.getElementById('wrap');
var btn = document.getElementById('btn');

var page = 1;
var pageCount = 20;

var url = 'https://1boon.kakao.com/ch/enter.json?page='+ page +'&pagesize=' + pageCount + '';

function setPage(){
    page++;
    url = 'https://1boon.kakao.com/ch/enter.json?page='+ page +'&pagesize=' + pageCount + '';
}

function board(json){
    console.log(json);
    
    var str = '';
    
    for(var i = 0; i < json.data.length; i++){
        var title = json.data[i].title;
        var path = json.data[i].path;

        str += '<a href="https://1boon.kakao.com/' + path + '">' + title + '</a><BR>';
    }
    wrap.innerHTML = str;
}

getUrlData(url, board)

function getUrlData(url, callback){
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            callback(data) // console.log(data);
        });
    })
    .catch(function(err){
        console.log('Fetch Error :-S', err);
    });
}

btn.addEventListener('click', function(event){
    setPage(); // 더보기 눌렀을 때
    getUrlData(url, board); // 다음 페이지 보이기
});