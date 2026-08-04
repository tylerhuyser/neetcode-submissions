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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function equivalence(a, b) {

            console.log(a)
            console.log(b)

            if (a === null && b === null) return true
            else if (a === null || b === null) return false

            if (a.val !== b.val) {
                return false
            }

            let left = equivalence(a.left, b.left)
            let right = equivalence(a.right, b.right)

            return left && right
        }

        return equivalence(p, q)

    }
}
