console.log('app');
var appkey = 'b5f22ee8a7db9f54f69151f66c92861d';
var btn = document.getElementById("btn");
var search = document.getElementById("search");


var myHeaders = new Headers(); //헤더라는 객체로 헤더를 만듬
myHeaders.append("Authorization", "KakaoAK b5f22ee8a7db9f54f69151f66c92861d");
var options = {
    headers : myHeaders
};//header 넘김

function searching(keyword) {
    var url = `https://dapi.kakao.com/v2/search/web?query=${keyword}`;
    getUrlData(url, options, board);
}

function board (json){
    console.log(json);

    var str = '';
    for(var i = 0; i < json.data.length; i++){
        var title = json.data[i].title;
        var path = json.data[i].path;
        str += '<a href="'+ path +'">' + title + '</a><BR>';
    }
    wrap.innerHTML = str;
}

function getUrlData(url, options, callback){
    fetch(url, options).then(function(response){
        response.json().then(function(data){
            callback(data)
        });
    })
    .catch(function(err){
        console.log('Fetch Error :-S', err);
    });
}

btn.addEventListener('click', function(event){
    var keyword = search.value;
    searching(keyword);
});
