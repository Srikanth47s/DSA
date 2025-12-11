const arr = [500,34,5,3,45,64,56,100];

function findLargestNum(arr){
    let largestNum = 0;
    for(let i = 0; i<arr.length; i++){
        if(largestNum < arr[i]){
            largestNum = arr[i];
        }
    }
    return largestNum;
}
console.log(findLargestNum(arr))