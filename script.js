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

    if(array.length == 1) {
        return root;
    }

    if(array.length == 2) {
        return root;
    }

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    root.leftChild = tree(left)
    root.rightChild = tree(right);

    return root;
}

function buildTree(array) {
    //takes the tree and builds it
}


const evenArray = [1, 2, 3, 4, 5, 6];
const oddArray = [1, 2, 3, 4, 5, 6, 7];