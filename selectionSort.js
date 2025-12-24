let arr = [9,19,1,0,2,3];

let selectionSort = function(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        [arr[min],arr[i]] = [arr[i],arr[min]];
    }
    return arr;
}

let sortedArr = selectionSort(arr);
console.log(sortedArr);