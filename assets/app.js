var channel = 'trending'; //category
var page = 1;
var pageCount = 20;
var url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;

var str = '';
var btn = document.querySelector('.btn'); //더보기 button.

function btnClick() { //더보기
    page++; //Change page
    setUrl(); //Setting
    setTimeout(function(){ getUrlData(url, board) }, 150); //Loading data.
    loading.style.display = 'block'; //Show loder
}

function setUrl() { //url Setting.
    url = `https://1boon.kakao.com/ch/${channel}.json?pagesize=${pageCount}&page=${page}`;
}

btn.addEventListener('click', btnClick); //이벤트 리스너 추가

//List
var list = document.getElementById('list');
var loading = document.querySelector('.loading'); //Loader in div(.loding) element.

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
            <span class="conTotal">${totalView.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 읽음</span>
        </a>`;
    }

    list.innerHTML = str; //Show loaded data
    loading.style.display = 'none'; //if load completed? Hidden loader.
}

getUrlData(url, board); //Fetch data.

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
var clicked = document.querySelector('.active'); //actived element. 
var lies = document.querySelectorAll('.nav > li'); //LI elements in Nav-bar.

lies.forEach(function(li){ // 각 요소에 이벤트 리스너 추가
    li.addEventListener('click', onClick)
    //li 요소를 클릭하면 함수가 실행되고 event인자가 넘어온다.
});

function onClick() {    //change channel
    str = ''; page = 1; //data-list 초기화
    channel = document.getElementById(event.target.id).id; //A-tag의 ID가져오기

    clicked = document.querySelector('.active'); //actived element.
    clicked.className = clicked.className.replace(/\bactive\b/g, ''); //Change className (active -> '')
    
    var click = event.currentTarget; //이벤트가 바인딩된 요소
    click.className = 'active'; //Change className.

    setUrl(); //Setting
    getUrlData(url, board); //Fetch data.
}