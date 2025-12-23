let nums = [0,1,5,3,6,9];
let target = 10

let linearSearch = function(nums,target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1
}

console.log(linearSearch(nums,target))