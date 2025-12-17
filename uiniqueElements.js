function uiniqueElements(arr){
    let x = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x+1;
            arr[x] = arr[i]
            
        }
    }
    return [arr, x+1];

    // let j = 0;
    // let arr1 = [];
    // for(let i=0; i<arr.length; i++){
      
    //     if(!arr1.includes(arr[i])){
    //         arr1.push( arr[i]);
    //         [arr[i],arr[j]] = [arr[j],arr[i]];
    //         j++;
    //     }
    // }
    // return arr;
}

let arr = [0,0,1,1,2,2,3,3,4,4,5]

console.log(uiniqueElements(arr))