const list = [9, 4, 5, 1, 12, 0, 7, 1];
let OCount = 0;

function findSmallest(list) {
    let rest = [];
    let smallest = list[0];

    for (let i=0; i < list.length - 1; i++) {
        OCount ++;
        if (smallest >= list[i + 1]) {
            rest.push(smallest);
            smallest = list[i + 1];
        } else {
            rest.push(list[i + 1])
        }
    }

    return [smallest, rest];
}

function sortFromSmall(list) {
    const result = [];
    let currentList = list;

    for(let i=0; i < list.length; i++) {
        const parts = findSmallest(currentList);
        currentList = parts[1];
        result.push(parts[0]);
    }

    return result;
}

console.log(sortFromSmall(list));
console.log(OCount === (list.length)/2 * (list.length - 1));