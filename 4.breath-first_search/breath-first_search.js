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
    if (nameChecked.has(name)) {
        return;
    }
    if (checkIsMangoSeller(name)) {
        console.log(`${name} is the mango seller.`);

        return true;
    }

    nameChecked.add(name);
    if (graph[name] && graph[name].length) {
        graph[name].forEach((n) => {
            breathFirstSearch(n);
        });
    }
};

breathFirstSearch('you');
