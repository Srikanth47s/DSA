let sigleNumber = function(nums){
    // let hash = {};
    // for(let i=0; i<nums.length; i++){
    //     if(!hash[nums[i]]){
    //         hash[nums[i]] = 1;
    //     }else{
    //         hash[nums[i]]++ ;
    //     }
    // }
    // for(let value in hash){
    //     if(hash[value] === 1){
    //         return value;
    //     }
    // }

    let xor = 0;
    for(let i=0; i<nums.length; i++){
        xor = xor^nums[i];
    }
    return xor;
}
let nums = [1,2,3,3,2,4,1]

console.log(sigleNumber(nums))