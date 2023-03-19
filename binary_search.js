const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

function binarySearch(arr, item){
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item){
            found = true;
            position = middle
            return position;
        }
        if (item < arr[middle]){
            end = middle - 1
        }else {
            start = middle + 1
        }
    }
    return position;
}

// console.log(binarySearch(arr, 6));
// console.log("count", count);

function recursiveBinarySearch(arr, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1
    if (item === arr[middle]) {
        return middle
    }
    if (item < arr[middle]){
        return recursiveBinarySearch(arr, item, 0, middle - 1);
    }else {
        return recursiveBinarySearch(arr, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(arr, 7, 0, arr.length));
console.log(count);