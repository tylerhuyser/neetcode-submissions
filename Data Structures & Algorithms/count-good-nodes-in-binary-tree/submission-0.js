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
    goodNodes(root) {
        let count = 0

        function goodOrBad(node, greatest) {
            if (node === null) return
            if (node.val >= greatest) {
                count++
                greatest = node.val
            }

            goodOrBad(node.left, greatest)
            goodOrBad(node.right, greatest)
        }

        
        goodOrBad(root, -Infinity)


        return count
    }
}
