var num = prompt("Enter a Number");
num = parseInt(num);

if(isNaN(num)){
    console.log("Enter a Vaild Number");
}else{
    for (var i = 1; i <= num; i++) {
        var flag = 0;
        
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}