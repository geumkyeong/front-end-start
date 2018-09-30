var wrap = document.querySelector('.wrap');

var str = '';
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        if(i%2==0){
            if(j%2==0){
                str += '<div class="b"></div>';
            } else {
                str += '<div class="w"></div>';
            }
        } else {
            if(j%2==1){
                str += '<div class="b"></div>';
            } else {
                str += '<div class="w"></div>';
            }
        }
    }
}

wrap.innerHTML = str;