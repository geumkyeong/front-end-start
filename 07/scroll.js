var $window = $('window');
var up = $('.up');

function checkScroll(){
    var scrollTop = $window.scrollTop();
    var upshowtime = 100;
    if(scrollTop > upshowtime){
        $up.fadeIn();
    }
}
function goTop() {
    $up.scrollTop(0);
    $('html, body').animate({scrollTop: 0}, 400);
}

$window.on('scroll', checkScroll);
$up.click(goTop);

