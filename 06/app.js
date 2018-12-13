console.log('app');
var appkey = '51604d09a58cd5bad7216542b64809f9';

var pageCount = 10;
var query = '제주대';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}&size=${pageCount}`;

var myHeaders = new Headers(); //헤더라는 객체로 헤더를 만듬
myHeaders.append('Authorization', 'KakaoAK 51604d09a58cd5bad7216542b64809f9');
var options = {
    headers: myHeaders
};//header 넘김

var wrap = document.getElementById('wrap');
var btn = document.getElementById("btn");
var search = document.getElementById('search');

function board(json) {
    console.log(json);

    var str = '';
    for(var i = 0; i < json.documents.length; i++){
        var title = json.documents[i].title;
        var path = json.documents[i].url;
        str += `<a href="${path}">${title}</a><BR>`;
    }
    wrap.innerHTML = str;
}

getUrlData(query, options, board)

function getUrlData(query, options, callback) {
    url = `https://dapi.kakao.com/v2/search/web?query=${query}&size=${pageCount}`;

    fetch(url, options).then(function(response) {
        response.json().then(function(data) {
            callback(data);
        });
    })
    .catch(function(err){
        console.log('Fetch Error :-S', err);
    });
}

btn.addEventListener('click', function(){
    query = search.value;
    getUrlData(query, options, board);
});