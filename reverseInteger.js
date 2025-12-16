function reverse(num) {
    let rev = 0;
    let numOriginal = num;

    num = Math.abs(num);

    while(num > 0){
        let rem = num % 10;
        rev = (10*rev) + rem;
        num = Math.floor(num /10)
    }

    return (numOriginal < 0) ? -rev : rev ;

}

let num = -12;
console.log(reverse(num));