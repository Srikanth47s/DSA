let arr = [5,3,2,0,1];
let arraySum = function(n){
    if(n === 0) return arr[n];
    return arr[n] + arraySum(n-1);
}

console.log(arraySum(arr.length - 1));