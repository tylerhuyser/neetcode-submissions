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

    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;
        // if (inorder.length === 1) return inorder
        let rootVal = preorder[0]
        let root = new TreeNode(rootVal)
        let rootIndex = inorder.indexOf(rootVal)

        let leftInorder = inorder.slice(0, rootIndex)
        let rightInorder = inorder.slice(rootIndex + 1)
        let leftPreorder = preorder.slice(1, rootIndex + 1)
        let rightPreorder = preorder.slice(rootIndex + 1)

        root.left = this.buildTree(leftPreorder, leftInorder)
        root.right = this.buildTree(rightPreorder, rightInorder)

        return root
    }
}
