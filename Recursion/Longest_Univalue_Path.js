/*
LeetCode #687

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output: 2

Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output: 2

 

Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
*/

const longestUnivaluePath = function (root) {
    let count = 0;

    const findPath = (node, parent) => {
        if (!node) {
            return 0;
        }

        if (!node.left && !node.right) {
            if (node.val === parent) {
                return 1;
            } else {
                return 0;
            }
        }

        let left = findPath(node.left, node.val);
        let right = findPath(node.right, node.val);

        count = Math.max(count, left + right);

        if (node.val === parent) {
            return 1 + Math.max(left, right);
        } else {
            return 0;
        }
    }
    findPath(root);
    return count;

};