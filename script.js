function createNode(data) {
    return {
        data: data,
        leftChild: null,
        rightChild: null,
    }
}

function tree(array) {
    //recursive stuff

    const middle = Math.floor(array.length / 2);
    const root = createNode(array[middle]);

    //root.leftChild = tree(left)
    //root.rightChild = tree(right);
}

function buildTree(array) {
    //takes the tree and builds it
}