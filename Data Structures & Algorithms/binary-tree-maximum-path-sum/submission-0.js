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
    maxPathSum(root) {
        let max = -Infinity

        function compute(node) {
            if (!node) return 0

            let leftMax = Math.max(0, compute(node.left))
            let rightMax = Math.max(0, compute(node.right))

            let nodeMax = node.val + leftMax + rightMax
            max = Math.max(max, nodeMax);

            return node.val + Math.max(leftMax, rightMax)
        }

        compute(root)
        return max
    }
}
