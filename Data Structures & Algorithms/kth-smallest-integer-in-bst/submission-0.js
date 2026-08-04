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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = -1
        let count = k

        function traverse(node) {
            if (node === null || result !== -1 ) return

            traverse(node.left)

            count--

            if (count === 0) {
                result = node.val
            } 

            traverse(node.right)
        }

        traverse(root)
        return result
    }
}
