let arr = [9, 0, 1, 4, 2, 7];
let n = arr.length;

let bubbleSort = function (arr) {
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}

let sortedArr = bubbleSort(arr);
console.log(sortedArr);