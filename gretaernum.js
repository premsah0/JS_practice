function checkBigNUm(a, b, c) {
    if (a >= b && a >= c) {
        return a +"is largest"
    }else if (b >= a && b>= c){
        return b + "is largest"
    }else{
        return c + "is largest"
    }
}

console.log(checkBigNUm(10,20,30));
