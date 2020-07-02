/*
LeetCode # 938

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

//Create Binary Tree
class BinaryTreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }
    add(value) {
        let newNode = new BinaryTreeNode(value);

        const searchTree = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
    }
}

//make tree with test cases
let testCase1 = [10, 5, 15, 3, 7, null, 18];
let tc1 = new BinaryTree(testCase1[0]);

let testCase2 = [10,5,15,3,7,13,18,1,null,6];
let tc2 = new BinaryTree(testCase2[0]);

const makeTree = (tree, arr) => {
    for (let i = 1; i < arr.length; i++) {
        tree.add(arr[i]);
    }
}
makeTree(tc1, testCase1);
makeTree(tc2, testCase2);

//range function
const rangeSumBST = (root, L, R) => {
    let sum = 0;

    const checkNode = (root) => {
        if (!root) {
            return null;
        }

        if (root.value >= L && root.value <= R) {
            sum = sum + root.value;
        }
        checkNode(root.left);
        checkNode(root.right);
    }
    checkNode(root);
    return sum;
};

console.log(rangeSumBST(tc1.root, 7, 15));
console.log(rangeSumBST(tc2.root, 6, 10));