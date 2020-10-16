function swap(arr, first, second) {
    arr.splice(first, 1, arr.splice(second, 1, arr[first])[0]);
}

function bubble(arr) {

    for (let i = 0; i < arr.length; i++) {
        for(a = 0; a < arr.length-1; a++) {
            if(arr[a] > arr[a+1]) {
                swap(arr, a, a+1)
            }
        }
    }

    return arr;
}

console.log(bubble([5, 1, 4, 2, 7 ,8, 9, 0, 6, 3]));