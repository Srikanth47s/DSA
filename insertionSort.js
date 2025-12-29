let arr = [9,6,20,5,10,7,19,111];

let sort = function(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let curr = arr[i];
        let prev = i-1;
        while(curr < arr[prev] && prev >= 0){
            arr[prev+1] = arr[prev];
            prev--;
        }
        arr[prev+1] = curr;
    }
    return arr
}

let sortedArr = sort(arr);
console.log(sortedArr);