function eliminateValues(num,value){
    let x = 0;
    for(let i=0; i<num.length; i++){
        if(num[i] != value){
            num[x] = num[i];
            x = x+1;
        }
    }
    return x;
}

let num = [1,2,1,3,12,31,1];

console.log(eliminateValues(num,1));