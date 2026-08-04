/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let output = null
        let current = head

        while (current !== null) {
            let temp = current.next
            current.next = output
            output = current
            current = temp
        }

        return output
    }
}
