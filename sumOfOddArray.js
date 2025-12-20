let arr = [1,2,3,4,5,0,1];

let oddSum = function(n){
    let odd = (arr[n]%2 === 0);
    if(n === 0) {
        return odd ? 0: arr[n];
    }
    return odd ? oddSum(n-1) : arr[n] + oddSum(n-1);
}

console.log(oddSum(arr.length-1));