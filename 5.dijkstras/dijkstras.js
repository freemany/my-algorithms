// the graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.c = 1;

graph.b = {};
graph.b.a = 3;
graph.b.c = 5;
graph.b.d = 1;

graph.c = {};
graph.c.d = 7;
graph.c.fin = 8;

graph.d = {};
graph.d.fin = 99;

graph.fin = {};

// The costs table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.c = Infinity;
costs.d = Infinity;
costs.fin = Infinity;

// the parents table
const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.c = null;
parents.d = null;
parents.fin = null;

let processed = [];


const findLowestCostNode = (itCosts) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    Object.keys(itCosts).forEach((node) => {
        const cost = itCosts[node];
        // If it's the lowest cost so far and hasn't been processed yet...
        if (cost < lowestCost && !processed.includes(node)) {
            // ... set it as the new lowest-cost node.
            lowestCost = cost;
            lowestCostNode = node;
        }
    });
    return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node !== null) {
    const cost = costs[node];
    // Go through all the neighbors of this node
    const neighbors = graph[node];
    Object.keys(neighbors).forEach((n) => {
        const newCost = cost + neighbors[n];
        // If it's cheaper to get to this neighbor by going through this node
        if (costs[n] > newCost) {
            // ... update the cost for this node
            costs[n] = newCost;
            // This node becomes the new parent for this neighbor.
            parents[n] = node;
        }
    });

    // Mark the node as processed
    processed = processed.concat(node);

    // Find the next node to process, and loop
    node = findLowestCostNode(costs);
}

const getPathToFinal = (name, path) => {
    function getParent(name, path) {
        if (parents[name]) {
            path = [parents[name], ...path];
            return getParent(parents[name], path);
        }
        return path;
    }
    return getParent(name, path);
};

console.log('Cost from the start to each node:');
console.log(costs); // { a: 5, b: 2, fin: 6 }

console.log(getPathToFinal('fin', ['fin']));