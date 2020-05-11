const sum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr[0]) {
        const first = arr[0];
        arr.splice(0, 1);

        return first + sum(arr);
    }
};


console.log(sum([1, 2, 3, 4, 5, 6]));