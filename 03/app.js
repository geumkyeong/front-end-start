function gugudan(i) {
    for(var i = 2; i <= 9; i++){
        console.log(i+"단")
        for(var j = 1; j <= 9; j++) {
            console.log(i + "x"+ j +"="+(i*j));
        }
    }
}

for(var i = 2; i <= 9; i++){
    gugudan(i);
}

alert(1);