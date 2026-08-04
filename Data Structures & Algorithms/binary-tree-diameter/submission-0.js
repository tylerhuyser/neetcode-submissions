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
    diameterOfBinaryTree(root) {

        let maxDiameter = 0

        function dfs (curr) {
            if (!curr) return 0;

            let left = dfs(curr.left)
            let right = dfs(curr.right)

            maxDiameter = Math.max(maxDiameter, left + right)
            return 1 + Math.max(left, right)
        }

        dfs(root)

        return maxDiameter
    }
}
