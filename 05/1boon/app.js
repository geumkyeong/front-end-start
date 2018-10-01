console.log('1boon');

var url = 'https://1boon.kakao.com/ch/enter.json?page=2&pagesize=15';

getUrlData(url, function(json){
    console.log(json);

    var str = '';
    
    for(var i = 0; i < json.data.length; i++){
        var title = json.data[i].title;
        var path = json.data[i].path;

        str += '<a href="https://1boon.kakao.com/' + path + '">' + title + '</a><BR>';
    }
    document.getElementById('wrap').innerHTML = str;
})

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
