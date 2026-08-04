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

        function traverse (node) {

            if (node === null) return 0

            // 1. Go Deep
            // 2. Send number upwards
            // 3. Find the Max of the two values
            // If node.left traverse. if node. right travers
            let leftRadius = traverse(node.left)
            let rightRadius = traverse(node.right)

            maxDiameter = Math.max(maxDiameter, leftRadius + rightRadius)
            return 1 + Math.max(leftRadius, rightRadius)
        }

        traverse(root)
        return maxDiameter
    }
}
