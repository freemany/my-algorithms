const graph = {};
graph['you'] = ['alice', 'clarie', 'bob'];
graph['bob'] = ['anuj', 'peggy_mango'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = ['freeman', 'tia', 'tintin_mango'];

const checkIsMangoSeller = (name) => {
    return name.endsWith('_mango');
};

const nameChecked = new Set();

const breathFirstSearch = (name) => {
    let queue = [];
    queue.push(name);

    while(queue.length) {
        const n = queue[0];
        if (nameChecked.has(n)) {
            queue.shift();
            continue;
        }
        if (!checkIsMangoSeller(n)) {
            nameChecked.add(n);
            queue.shift();
        } else {
            console.log(`the mango seller is ${n}`);

            return true;
        }
        if (graph[n]) {
            queue = [...queue, ...graph[n]];
        }
    }

    return false;
};


console.log(breathFirstSearch('you'));
