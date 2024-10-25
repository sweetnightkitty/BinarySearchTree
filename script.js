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

    //base case: When length becomes 1 children should remain "null"
    if(array.length > 1 ) {
        root.leftChild = tree(array.slice(0, (middle)));
        root.rightChild = tree(array.slice(middle + 1));
    }

    return root;
}

function buildTree(array) {
    const sortedArray = mergeSort(array);
}


function mergeSort(array) {
    if(array.length === 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [],
        leftIndex = 0,
        rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}








const evenArray = [1, 2, 3, 4, 5, 6];
const oddArray = [1, 2, 3, 4, 5, 6, 7];
const mixedArray = [5, 2, 3, 7, 4, 1, 6];

const four = [1, 2, 3, 4];
const seven = [1, 2, 3, 4, 5, 6, 7];
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];