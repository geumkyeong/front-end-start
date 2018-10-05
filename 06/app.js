console.log('app');
var appkey = 'b5f22ee8a7db9f54f69151f66c92861d';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}}`;


var myHeaders = new Headers(); //헤더라는 객체로 헤더를 만듬
myHeaders.append("Authorization", "KakaoAK b5f22ee8a7db9f54f69151f66c92861d");
var option = {
    headers : myHeaders
};
//header 넘김


fetch(url, option)
  .then(function(response){
    response.json().then(function(data){
        console.log('json data:', data);
    });
});