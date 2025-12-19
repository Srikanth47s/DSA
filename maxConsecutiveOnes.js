let maxConsecutiveOnes = function(binary){
    let maxOnes = 0;
    let count = 0;
    for(let i=0; i<binary.length; i++){
        if(binary[i] === 1){
            count++;
        }else if(count > maxOnes){
            maxOnes = count;
            count = 0;
        }else{
            count = 0;
        }

         
    }
    // return Math.max(maxOnes,count);
    return (maxOnes>count) ? maxOnes : count;
}

let binary = [1,0,1,1,0,1];

console.log(maxConsecutiveOnes(binary));