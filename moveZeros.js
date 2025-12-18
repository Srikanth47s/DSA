function moveZeros(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            [arr[x],arr[i]] = [arr[i],arr[x]];
             x = x+1;
            
        }
        if(0){
            console.log('zero')
        }
    }
    return arr;
}

let arr = [0,0,0,0,1];
console.log(moveZeros(arr));