//구구단
function gugudan(i) {
    console.log(i+'단');
    for(var j = 1; j <= 9; j++){
        console.log(i + "x" + j + "=" + (i * j));
    }
}

//구구단 2~9단 호출
for(var i = 2; i <= 9; i++){
    gugudan(i);
}

alert(1);


