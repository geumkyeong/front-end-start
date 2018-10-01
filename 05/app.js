console.log('app.js');
var url = 'https://1boon.kakao.com/ch/enter.json?page=3&pagesize=2';
function json(){
        fetch(url)
    .then(function(response){
    response.json().then(function(data){
        console.log('json data:', data);
        // document.getElementById('name').innerHTML = data.name;
    });
    })
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

function jsonp() {
    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.src = 'json.js';
    head.appendChild(script);
}

function callback(data){
    console.log(data);
    document.getElementById('name').innerHTML = data.name;
}

json();
// jsonp();