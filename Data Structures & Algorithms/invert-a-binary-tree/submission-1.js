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
     * @return {TreeNode}
     */
    invertTree(root) {

        function dfs(node) {
            
            if (node === null) return;

            let tempLeft = node.left
            let tempRight = node.right

            node.left = tempRight
            node.right = tempLeft

            dfs(node.left)
            dfs(node.right)
        }

        dfs (root)

        return root
    }
}
