function createNode(data) {
    return {
        data: data,
        leftChild: null,
        rightChild: null,
    }
}

function tree(array, start = 0, end = (array.length - 1)) {
    const middle = Math.floor((end - start) / 2);
    const root = createNode(array[middle]);

    //base case
    if(array.length > 1 ) {
        root.leftChild = tree(array.slice(0, (middle)));
        root.rightChild = tree(array.slice(middle + 1));
    }

    return root;
}

function buildTree(array) {
    //takes the tree and builds it
}


const evenArray = [1, 2, 3, 4, 5, 6];
const oddArray = [1, 2, 3, 4, 5, 6, 7];

const four = [1, 2, 3, 4];
const seven = [1, 2, 3, 4, 5, 6, 7];
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];