let nums = [-1,0,1,2,5,9,10];
let target = 9;

const binarySearch = function(nums,target){
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let middle = Math.floor(left+right/2);
        if(nums[middle] === target){
            return middle;
        }else if(nums[middle] <= target){
            left = middle+1;
        }else{
            right = middle+1;
        }
    }
}

console.log(binarySearch(nums,target))