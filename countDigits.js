function countDigits(n){
    if(n === 0){
        return 1;
    }
    n = Math.abs(n);
    let count = 0;

    while(n>0){
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let n = 0;

console.log(countDigits(n));

let m = 123;

console.log(countDigits(m));

let n1 = -1234;

console.log(countDigits(n1));