function findNeighbors(node, matrix) {
    const row = node[0];
    const col = node[1];
    let neighbours = [];

    // up
    if (row !== 0) {
        let up = [row - 1, col];
        neighbours.push(up);
    }
    // down
    if (row !== matrix.length - 1) {
        let down = [row + 1, col];
        neighbours.push(down);
    }
    // left
    if (col !== 0) {
        let left = [row, col - 1];
        neighbours.push(left);
    }
    //right
    if (col !== matrix[row].length - 1){
        let right = [row, col + 1];
        neighbours.push(right);
    }
    return neighbours;
}


function bfsPath(matrix, startNode, endValue) {
    let queue = []
    let path = [];
    queue.push(startNode);
    let visited = new Set();
    visited.add(startNode.toString());

    while (queue.length > 0){
        const currentNode = queue.shift();

        // add neighbours to queue
        const neighbours = findNeighbors(currentNode, matrix);

        for (const node of neighbours) {
            let nodeString = node.toString();
            if (visited.has(nodeString)) {
                continue;
            } else {
                visited.add(nodeString);
                queue.push(node);
            }
        }

        path.push(currentNode);
        if (matrix[currentNode[0]][currentNode[1]] === endValue) {
            return path;
        }

    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

 const matrix1 = [
     [  1,  2,  3,  4 ],
     [  5,  6,  7,  8 ],
     [  9, 10, 11, 12 ],
     [ 13, 14, 15, 16 ]
 ];

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
