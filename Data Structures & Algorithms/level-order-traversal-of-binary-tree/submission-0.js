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
     * @return {number[][]}
     */
    levelOrder(root) {
        console.log(root)
        let result = []
        const traverse = (node, level) => {
            if (node === null) return false

            if (result.length === level) {
                result.push([])
            }

            result[level].push(node.val)

            traverse(node.left, level + 1)
            traverse(node.right, level + 1)

        }

        traverse(root, 0)
        return result
    }
}
