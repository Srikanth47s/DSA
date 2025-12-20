let n = 5;

let fact = function(n){
    if(n === 1) return n;

    return n * fact(n-1);
}

console.log(fact(n));