var x = 0;
var y = 0;

for(y = 1; y <= 100; y++){
    x += y;
}
console.log(x);

for(y = 0; y <= 100; y++){
    if(y%2==1){
        console.log(y+"는 홀수입니다");
    }
}


for(x = 2; x <= 9; x++){
    for(y = 1; y <= 9; y++) {
        
        console.log(x + "x"+ y +"="+(x*y));
    }
}



