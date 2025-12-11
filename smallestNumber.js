const arr = [1,3,-1,5,6,-10];

function smallestNumber(arr){
    let smallestNum = Infinity;
    for(let i=0; i<arr.length; i++){
        if(smallestNum > arr[i]){
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}

console.log(smallestNumber(arr))