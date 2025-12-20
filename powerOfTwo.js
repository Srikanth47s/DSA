let n = 1;

let power = function(n){
    if(n===1){
        return true;
    }else{
        if(n<1){
            return false;
        }
    }
    return power(n/2);
}

console.log(power(n));