const arr = [1,-2,4,-5,-6,7,8];

function countNegative(arr){
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if(arr[i] < 0){
            count++
        }        
    }
    return count;
}

console.log(countNegative(arr))
