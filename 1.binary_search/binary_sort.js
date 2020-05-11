const list = [0, 11, 22, 33, 44, 55, 66, 77, 88];

const needle = process.argv[2];

if (!needle) {
    console.log('Please provide the needle for searching');
}

function binarySort(needle, list) {
    let lowIndex = 0;
    let highIndex = list.length - 1;
    let midIndex;

    while (lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex) / 2);

        if (needle < list[midIndex]) {
            highIndex = midIndex -1;
            continue;
        }
        if (needle > list[midIndex]) {
            lowIndex = midIndex + 1;
            continue;
        }

        if (needle == list[midIndex]) {
            return midIndex;
        }
    }

    return -1;
}

console.log(binarySort(needle, list));