const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++){
        count += 1;
        if (arr[i] === item){
            return i
        }
    }
    return null
}

console.log(linearSearch(arr, 5));
console.log("count", count);