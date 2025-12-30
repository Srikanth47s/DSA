let arr = [10,1,3,9,0,6,2];

var sortArray = function(nums) {
        if(nums.length === 1){
            return nums;
        }
        let mid = Math.floor(nums.length/2);
        let left = sortArray(nums.slice(0,mid));
        let rigth = sortArray(nums.slice(mid));

        return merge(left,rigth);
};

function merge(left,rigth){
    let i = 0;
    let j = 0;
    let res = [];
    while(left.length > i && rigth.length > j){
        if(left[i] > rigth[j]){
            res.push(rigth[j]);
            j++
        }else{
            res.push(left[i]);
            i++;
        }
    }
    return [...res, ...left.slice(i), ...rigth.slice(j)];
}

let sortedArray = sortArray(arr);
console.log(sortedArray);