const arr = [1,10,5,11,30,60,60];
// const arr =[-1,-3,5]

function secondLargest(arr){
    if(arr.length < 2){
        return 'array is not valid'
    }
    let largestNum = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(largestNum < arr[i]){
            secondLargest = largestNum;
            largestNum = arr[i];
        }else if(secondLargest < arr[i] && largestNum != arr[i]){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr))