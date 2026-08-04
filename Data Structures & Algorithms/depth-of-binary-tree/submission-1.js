/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        function traverse(node, depth) {
            if (node === null) return depth

            let maxLeft = traverse(node.left, depth + 1)
            let maxRight = traverse(node.right, depth + 1)

            let max = Math.max(maxLeft, maxRight)

            return max
        }

        return traverse(root, 0)
    }
}
