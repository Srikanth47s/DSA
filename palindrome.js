function palindrome(num){
    if(num < 0) return false;
    let originalNum = num;
    let rev = 0;
    while(num > 0){
        let rem = num % 10;
        rev = (10*rev) + rem ;
        num = Math.floor(num/10);
    }
    return originalNum === rev;
}

let num = -1;
console.log(palindrome(num))