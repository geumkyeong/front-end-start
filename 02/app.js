//1부터 100까지 더하기
var sum = 0;

for(var i = 0; i <= 100; i++){
    sum += i;
}

console.log(sum);

//홀수 출력하기(0~100)
for(var i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

//구구단
for(var x = 2; x <= 9; x++){
    for(var y = 1; y <= 9; y++){
       console.log(x + "x" + y + "=" + (x * y));
    }
}
