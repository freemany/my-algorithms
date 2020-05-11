const arr = [9, 0, 5, 2, 4, 8, 7, 6, 1, 3, 10];
const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const qsort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const len = arr.length;
    const pivotIndex = Math.floor(len / 2);

    const pivot = arr[pivotIndex];
    const front = [];
    const behind = [];

    arr.slice(0, pivotIndex).forEach(a => {
        if (a >= pivot) {
            behind.push(a);
        } else {
            front.push(a);
        }
    });
    arr.slice(pivotIndex + 1).forEach(a => {
        if (a >= pivot) {
            behind.push(a);
        } else {
            front.push(a);
        }
    });

    return [...qsort(front), pivot, ...qsort(behind)];
};

console.log(qsort(arr));
console.log('assert: ', JSON.stringify(expected) === JSON.stringify(qsort(arr)));