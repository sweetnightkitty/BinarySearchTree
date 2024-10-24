function createNode(data) {
    return {
        data: data,
        leftChild: null,
        rightChild: null,
    }
}

function tree(array) {
    const middle = Math.floor(array.length / 2);
    const root = createNode(array[middle]);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    root.leftChild = tree(left)
    root.rightChild = tree(right);

    return root;
}

function buildTree(array) {
    //takes the tree and builds it
}