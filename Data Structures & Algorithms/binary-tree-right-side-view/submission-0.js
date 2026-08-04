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
     * @return {number[]}
     */
    rightSideView (root) {
        if (root === null) return []

        let values = []

        const traverse = (node, level) => {
            if (node === null) {
                return
            }

            if (level === values.length) {
                values.push(node.val)
            }

            traverse(node.right, level + 1)
            traverse(node.left, level + 1)

        }

        traverse(root, 0)

        return values

        



        // 1. Push the right most values
        // 2. If there are left values that don't occupy a row with a right value, push those.

    }
}
