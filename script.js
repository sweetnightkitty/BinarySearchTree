function createNode(data) {
    return {
        data: data,
        leftChild: null,
        rightChild: null,
    }
}

function tree() {  
    return {
        construct: function (array) {
            const processedArray = this.processArray(array);
            this.root = this.buildTree(processedArray);
            return this.root;
        },


        processArray: function(array) {
            return removeDuplicates(mergeSort(array));
        },
        
        buildTree: function(array, start = 0, end = (array.length - 1)) {
            const middle = Math.floor((end - start) / 2);
            const root = createNode(array[middle]);
        
            //base case: When length becomes 1 children should remain "null"
            if(array.length > 1 ) {
                root.leftChild = this.buildTree(array.slice(0, (middle)));
                root.rightChild = this.buildTree(array.slice(middle + 1));

                if(!root.leftChild.data) {
                    root.leftChild = null;
                } else if(!root.rightChild.data) {
                    root.rightChild = null;
                }
            }

        
            return root;

        },

        prettyPrint: function(node = this.root, prefix = "", isLeft = true) {
            if (node === null) {
                return;
              }
              if (node.rightChild !== null) {
                this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
              }
              console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
              if (node.leftChild !== null) {
                this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
              }
        },

        insert: function(value) {
            let currentNode = this.root;
            const newNode = createNode(value);

            while(currentNode) {
                if(value < currentNode.data) {
                    if(!currentNode.leftChild) {
                        currentNode.leftChild = newNode;
                        return this.root;
                    }
                    currentNode = currentNode.leftChild;
                } else if(value > currentNode.data) {
                    if(!currentNode.rightChild) {
                        currentNode.rightChild = newNode;
                        return this.root;
                    }
                    currentNode = currentNode.rightChild;
                } else {
                    return this.root;
                }
            }
        },

        inOrder: function (currentNode = this.root) {
            if(currentNode) {
                this.inOrder(currentNode.leftChild);
                console.log(currentNode.data);
                this.inOrder(currentNode.rightChild);
            }
        },

        deleteValue: function(value, currentNode = this.root) {
            if(currentNode == null) {
                return currentNode;
            }

            if(value < currentNode.data) {
                currentNode.leftChild = this.deleteValue(value, currentNode.leftChild);
            } else if(value > currentNode.data) {
                currentNode.rightChild = this.deleteValue(value, currentNode.rightChild);
            } else {
                //if value is == currentNode.data

                //If no left child returns right child null or not
                if(currentNode.leftChild == null) {
                    return currentNode.rightChild;
                }

                //if no right child returns left child null or not
                if(currentNode.rightChild == null) {
                    return currentNode.leftChild;
                }

                let successor = getSuccessor(currentNode);
                currentNode.data = successor.data;
                currentNode.rightChild = this.deleteValue(successor.data, currentNode.rightChild);

            }
            return currentNode;

        },
    }
}




function mergeSort(array) {
    if(array.length == 1) {
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

function removeDuplicates(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        for(let j = i - 1; j >= 0; j--) {
            if(array[j] == array[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

function getSuccessor(currentNode) {
    currentNode = currentNode.rightChild;
    while(currentNode && currentNode.leftChild) {
        currentNode = currentNode.leftChild;
    }
    return currentNode;
};



//TEST EXAMPLES
const mixedDuplicatesArray = [4, 2, 3, 5, 5, 1];

const evenArray = [1, 2, 3, 4, 5, 6];
const oddArray = [1, 2, 3, 4, 5, 6, 7];
const mixedArray = [5, 2, 3, 7, 4, 1, 6];

const four = [1, 2, 3, 4];
const seven = [1, 2, 3, 4, 5, 6, 7];
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const hole = [3, 1, 4];


const test = tree();
