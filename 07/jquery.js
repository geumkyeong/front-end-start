// document.querySelector('h1'); == $('h1')
//document.querySelector('h1').innerHTML = 'hi'; == $('h1').html('hi');
//h1를 가져오고 1초를 기다린다음에 fadeIn시켜라
//$('h1').fadeOut().delay(1000).fadeIn();

//$('div').css("background-color", 'yellow'); == querySelectorAll('div') 후 for문 style seting.
// var $div = $('div');//jquery 객체
// $div
//     .css("background-color", 'yellow')
//     .css("border", '1px solid red');
//dom을 처리하는 것은 부담이 될 수 있따. =>  변수화
// $('body').fadeOut().delay(1000).fadeIn();


//on== addeventLsitner
//val()  == .value
var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');

$btn.on('click', function(event){
//   console.log('click')
//   if($txt.val() === '') {
//     alert('값을 넣어주세요')
//     return;
//   }

//   $debug.html($txt.val());
    $('h1').hide('slow',function(){ console.log('hide ok!') });
});

$('.wrap').on('click','div', function(){
    $(event.target).fadeOut();
    // console.log(event.target);
});